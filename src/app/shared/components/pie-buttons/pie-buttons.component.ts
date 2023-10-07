import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {PieItem} from '../../../../../app/src/db/data/PieItem';
import {PieletteDBHelper} from '../../../../../app/src/db/PieletteDB';

@Component({
  selector: 'app-pie-buttons',
  templateUrl: './pie-buttons.component.html',
  styleUrls: ['./pie-buttons.component.scss']
})
export class PieButtonsComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() pieMenuId = 1;
  @Input() centerRadius = 20;
  @Input() centerThickness = 10;
  @Input() pieItemSpread = 150;
  @Input() editorMode = false;

  @ViewChild('pieCenter') pieCenter: any;
  @ViewChild('pieCenterSector') pieCenterSector: any;
  @ViewChild('pieMenuContainer') pieMenuContainer: any;

  @Output() activePieItemId = new EventEmitter<number | undefined>();

  centerX = document.body.clientWidth / 2;
  centerY = document.body.clientHeight / 2;
  hoveredColor = '#159a95';
  activeBtnIndex = -1;
  buttonHeight = 32;
  centerRotation = 0;
  pieItems: (PieItem | undefined)[] = [];

  ngOnInit() {
    this.updatePieItem().then(() => {
      this.drawCenterSector();
      this.drawCenter();

      this.activeBtnIndex = 0;
      this.activePieItemId.emit(this.pieItems[0]?.id);
    });

    // Reset the pie menu center position when the window is resized
    window.onresize = () => {
      this.centerX = this.pieMenuContainer.nativeElement.offsetWidth / 2;
      this.centerY = this.pieMenuContainer.nativeElement.offsetHeight / 2;

      window.log.debug(`Pie menu window resized, updating center position`);
    };

    window.electronAPI.closePieMenuRequested(() => {
      window.log.debug('Received closePieMenuRequested event');
      this.runPieTasks();
    });
  }

  ngAfterViewInit() {
    this.centerX = this.pieMenuContainer.nativeElement.offsetWidth / 2;
    this.centerY = this.pieMenuContainer.nativeElement.offsetHeight / 2;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.pieMenuId) {
      this.updatePieItem().then(() => this.drawCenterSector());
    }
  }

  onButtonClicked(index: number) {
    if (!this.editorMode) {
      this.runPieTasks();
    } else {
      this.activeBtnIndex = index;
      this.activePieItemId.emit(this.pieItems[index]?.id);
    }
  }

  runPieTasks() {
    window.log.debug(`Calling runPieTasks() with ${JSON.stringify(this.pieItems[this.activeBtnIndex]?.pieTaskContexts)}`);
    window.electronAPI.runPieTasks(JSON.stringify(this.pieItems[this.activeBtnIndex]?.pieTaskContexts ?? []));
  }

  onPointerMove(event: PointerEvent) {
    if (this.editorMode) {
      return;
    }

    // Note: You NEED basic trigonometry and knowledge of math notations for the following code to make sense
    this.centerRotation = Math.atan2(event.clientY - this.centerY, event.clientX - this.centerX);

    this.activeBtnIndex =
      ((Math.floor((
            // Set 0 degree to the top and offset by half of a sector
            ((Math.PI / 2 + this.centerRotation) + Math.PI / this.pieItems.length)
            // Normalize to [-a, b], abs(a) + b = 1
            / (2 * Math.PI))
          // Scale to [-c, d], abs(c) + d = pieItems.length
          * this.pieItems.length)

        // ---------------------------------------------------------------------------
        // Technically speaking, assume 0 degree is at 3 o'clock,
        // -a and -c represents a rotation of PI radians (180 degrees) clockwise
        // b and d represents a rotation of (1.5PI - PI/pieItems.length) radians clockwise
        // ---------------------------------------------------------------------------

      ) + this.pieItems.length) % this.pieItems.length;     // Map to [0, pieItems.length)
  }

  async updatePieItem() {
    const pieMenu = await PieletteDBHelper.pieMenu.get(this.pieMenuId);

    if (pieMenu) {
      this.pieItems = await PieletteDBHelper.pieItem.bulkGet(pieMenu.pieItemIds);
      window.log.debug(`${this.pieItems.length} pie items is loaded for Pie Menu [${pieMenu.name}]`);
    } else {
      window.log.warn(`Pie Menu [${this.pieMenuId}] is not found.`);
    }
  }

  private drawCenter() {
    const ctx = this.pieCenter.nativeElement.getContext('2d');

    const center = this.centerRadius + this.centerThickness / 2;

    ctx.beginPath();
    ctx.arc(center, center, this.centerRadius, 0, 2 * Math.PI);
    ctx.lineWidth = this.centerThickness;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
  }

  private drawCenterSector() {
    const ctx = this.pieCenterSector.nativeElement.getContext('2d');
    ctx.clearRect(0, 0, this.centerRadius * 2 + this.centerThickness, this.centerRadius * 2 + this.centerThickness);

    const center = this.centerRadius + this.centerThickness / 2;

    ctx.beginPath();
    ctx.arc(center, center, this.centerRadius, -Math.PI / this.pieItems.length, Math.PI / this.pieItems.length);
    ctx.lineWidth = this.centerThickness - 2;
    ctx.strokeStyle = 'green';
    ctx.stroke();
    ctx.closePath();
  }
}