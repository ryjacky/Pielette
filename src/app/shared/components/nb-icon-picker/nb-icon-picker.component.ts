import {Component} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-nb-icon-picker',
  templateUrl: './nb-icon-picker.component.html',
  styleUrls: ['./nb-icon-picker.component.scss']
})
export class NbIconPickerComponent {
  icons = [
    'activity',
    'activity-outline',
    'alert-circle',
    'alert-circle-outline',
    'alert-triangle',
    'alert-triangle-outline',
    'archive',
    'archive-outline',
    'arrow-back',
    'arrow-back-outline',
    'arrow-circle-down',
    'arrow-circle-down-outline',
    'arrow-circle-left',
    'arrow-circle-left-outline',
    'arrow-circle-right',
    'arrow-circle-right-outline',
    'arrow-circle-up',
    'arrow-circle-up-outline',
    'arrow-down',
    'arrow-down-outline',
    'arrow-downward',
    'arrow-downward-outline',
    'arrow-forward',
    'arrow-forward-outline',
    'arrow-ios-back',
    'arrow-ios-back-outline',
    'arrow-ios-downward',
    'arrow-ios-downward-outline',
    'arrow-ios-forward',
    'arrow-ios-forward-outline',
    'arrow-ios-upward',
    'arrow-ios-upward-outline',
    'arrow-left',
    'arrow-left-outline',
    'arrow-right',
    'arrow-right-outline',
    'arrow-up',
    'arrow-up-outline',
    'arrow-upward',
    'arrow-upward-outline',
    'arrowhead-down',
    'arrowhead-down-outline',
    'arrowhead-left',
    'arrowhead-left-outline',
    'arrowhead-right',
    'arrowhead-right-outline',
    'arrowhead-up',
    'arrowhead-up-outline',
    'at',
    'at-outline',
    'attach',
    'attach-2',
    'attach-2-outline',
    'attach-outline',
    'award',
    'award-outline',
    'backspace',
    'backspace-outline',
    'bar-chart',
    'bar-chart-2',
    'bar-chart-2-outline',
    'bar-chart-outline',
    'battery',
    'battery-outline',
    'behance',
    'behance-outline',
    'bell',
    'bell-off',
    'bell-off-outline',
    'bell-outline',
    'bluetooth',
    'bluetooth-outline',
    'book',
    'book-open',
    'book-open-outline',
    'book-outline',
    'bookmark',
    'bookmark-outline',
    'briefcase',
    'briefcase-outline',
    'browser',
    'browser-outline',
    'brush',
    'brush-outline',
    'bulb',
    'bulb-outline',
    'calendar',
    'calendar-outline',
    'camera',
    'camera-outline',
    'car',
    'car-outline',
    'cast',
    'cast-outline',
    'charging',
    'charging-outline',
    'checkmark',
    'checkmark-circle',
    'checkmark-circle-2',
    'checkmark-circle-2-outline',
    'checkmark-circle-outline',
    'checkmark-outline',
    'checkmark-square',
    'checkmark-square-2',
    'checkmark-square-2-outline',
    'checkmark-square-outline',
    'chevron-down',
    'chevron-down-outline',
    'chevron-left',
    'chevron-left-outline',
    'chevron-right',
    'chevron-right-outline',
    'chevron-up',
    'chevron-up-outline',
    'clipboard',
    'clipboard-outline',
    'clock',
    'clock-outline',
    'close',
    'close-circle',
    'close-circle-outline',
    'close-outline',
    'close-square',
    'close-square-outline',
    'cloud-download',
    'cloud-download-outline',
    'cloud-upload',
    'cloud-upload-outline',
    'code',
    'code-download',
    'code-download-outline',
    'code-outline',
    'collapse',
    'collapse-outline',
    'color-palette',
    'color-palette-outline',
    'color-picker',
    'color-picker-outline',
    'compass',
    'compass-outline',
    'copy',
    'copy-outline',
    'corner-down-left',
    'corner-down-left-outline',
    'corner-down-right',
    'corner-down-right-outline',
    'corner-left-down',
    'corner-left-down-outline',
    'corner-left-up',
    'corner-left-up-outline',
    'corner-right-down',
    'corner-right-down-outline',
    'corner-right-up',
    'corner-right-up-outline',
    'corner-up-left',
    'corner-up-left-outline',
    'corner-up-right',
    'corner-up-right-outline',
    'credit-card',
    'credit-card-outline',
    'crop',
    'crop-outline',
    'cube',
    'cube-outline',
    'diagonal-arrow-left-down',
    'diagonal-arrow-left-down-outline',
    'diagonal-arrow-left-up',
    'diagonal-arrow-left-up-outline',
    'diagonal-arrow-right-down',
    'diagonal-arrow-right-down-outline',
    'diagonal-arrow-right-up',
    'diagonal-arrow-right-up-outline',
    'done-all',
    'done-all-outline',
    'download',
    'download-outline',
    'droplet',
    'droplet-off',
    'droplet-off-outline',
    'droplet-outline',
    'edit',
    'edit-2',
    'edit-2-outline',
    'edit-outline',
    'email',
    'email-outline',
    'expand',
    'expand-outline',
    'external-link',
    'external-link-outline',
    'eye',
    'eye-off',
    'eye-off-2',
    'eye-off-2-outline',
    'eye-off-outline',
    'eye-outline',
    'facebook',
    'facebook-outline',
    'file',
    'file-add',
    'file-add-outline',
    'file-outline',
    'file-remove',
    'file-remove-outline',
    'file-text',
    'file-text-outline',
    'film',
    'film-outline',
    'flag',
    'flag-outline',
    'flash',
    'flash-off',
    'flash-off-outline',
    'flash-outline',
    'flip',
    'flip-2',
    'flip-2-outline',
    'flip-outline',
    'folder',
    'folder-add',
    'folder-add-outline',
    'folder-outline',
    'folder-remove',
    'folder-remove-outline',
    'funnel',
    'funnel-outline',
    'gift',
    'gift-outline',
    'github',
    'github-outline',
    'globe',
    'globe-2',
    'globe-2-outline',
    'globe-3',
    'globe-outline',
    'google',
    'google-outline',
    'grid',
    'grid-outline',
    'hard-drive',
    'hard-drive-outline',
    'hash',
    'hash-outline',
    'headphones',
    'headphones-outline',
    'heart',
    'heart-outline',
    'home',
    'home-outline',
    'image',
    'image-2',
    'image-outline',
    'inbox',
    'inbox-outline',
    'info',
    'info-outline',
    'keypad',
    'keypad-outline',
    'layers',
    'layers-outline',
    'layout',
    'layout-outline',
    'link',
    'link-2',
    'link-2-outline',
    'link-outline',
    'linkedin',
    'linkedin-outline',
    'list',
    'list-outline',
    'loader-outline',
    'lock',
    'lock-outline',
    'log-in',
    'log-in-outline',
    'log-out',
    'log-out-outline',
    'map',
    'map-outline',
    'maximize',
    'maximize-outline',
    'menu',
    'menu-2',
    'menu-2-outline',
    'menu-arrow',
    'menu-arrow-outline',
    'menu-outline',
    'message-circle',
    'message-circle-outline',
    'message-square',
    'message-square-outline',
    'mic',
    'mic-off',
    'mic-off-outline',
    'mic-outline',
    'minimize',
    'minimize-outline',
    'minus',
    'minus-circle',
    'minus-circle-outline',
    'minus-outline',
    'minus-square',
    'minus-square-outline',
    'monitor',
    'monitor-outline',
    'moon',
    'moon-outline',
    'more-horizontal',
    'more-horizontal-outline',
    'more-vertical',
    'more-vertical-outline',
    'move',
    'move-outline',
    'music',
    'music-outline',
    'navigation',
    'navigation-2',
    'navigation-2-outline',
    'navigation-outline',
    'npm',
    'npm-outline',
    'options',
    'options-2',
    'options-2-outline',
    'options-outline',
    'pantone',
    'pantone-outline',
    'paper-plane',
    'paper-plane-outline',
    'pause-circle',
    'pause-circle-outline',
    'people',
    'people-outline',
    'percent',
    'percent-outline',
    'person',
    'person-add',
    'person-add-outline',
    'person-delete',
    'person-delete-outline',
    'person-done',
    'person-done-outline',
    'person-outline',
    'person-remove',
    'person-remove-outline',
    'phone',
    'phone-call',
    'phone-call-outline',
    'phone-missed',
    'phone-missed-outline',
    'phone-off',
    'phone-off-outline',
    'phone-outline',
    'pie-chart',
    'pie-chart-2',
    'pie-chart-outline',
    'pin',
    'pin-outline',
    'play-circle',
    'play-circle-outline',
    'plus',
    'plus-circle',
    'plus-circle-outline',
    'plus-outline',
    'plus-square',
    'plus-square-outline',
    'power',
    'power-outline',
    'pricetags',
    'pricetags-outline',
    'printer',
    'printer-outline',
    'question-mark',
    'question-mark-circle',
    'question-mark-circle-outline',
    'question-mark-outline',
    'radio',
    'radio-button-off',
    'radio-button-off-outline',
    'radio-button-on',
    'radio-button-on-outline',
    'radio-outline',
    'recording',
    'recording-outline',
    'refresh',
    'refresh-outline',
    'repeat',
    'repeat-outline',
    'rewind-left',
    'rewind-left-outline',
    'rewind-right',
    'rewind-right-outline',
    'save',
    'save-outline',
    'scissors',
    'scissors-outline',
    'search',
    'search-outline',
    'settings',
    'settings-2',
    'settings-2-outline',
    'settings-outline',
    'shake',
    'shake-outline',
    'share',
    'share-outline',
    'shield',
    'shield-off',
    'shield-off-outline',
    'shield-outline',
    'shopping-bag',
    'shopping-bag-outline',
    'shopping-cart',
    'shopping-cart-outline',
    'shuffle',
    'shuffle-2',
    'shuffle-2-outline',
    'shuffle-outline',
    'skip-back',
    'skip-back-outline',
    'skip-forward',
    'skip-forward-outline',
    'slash',
    'slash-outline',
    'smartphone',
    'smartphone-outline',
    'smiling-face',
    'smiling-face-outline',
    'speaker',
    'speaker-outline',
    'square',
    'square-outline',
    'star',
    'star-outline',
    'stop-circle',
    'stop-circle-outline',
    'sun',
    'sun-outline',
    'swap',
    'swap-outline',
    'sync',
    'sync-outline',
    'text',
    'text-outline',
    'thermometer',
    'thermometer-minus',
    'thermometer-minus-outline',
    'thermometer-outline',
    'thermometer-plus',
    'thermometer-plus-outline',
    'toggle-left',
    'toggle-left-outline',
    'toggle-right',
    'toggle-right-outline',
    'trash',
    'trash-2',
    'trash-2-outline',
    'trash-outline',
    'trending-down',
    'trending-down-outline',
    'trending-up',
    'trending-up-outline',
    'tv',
    'tv-outline',
    'twitter',
    'twitter-outline',
    'umbrella',
    'umbrella-outline',
    'undo',
    'undo-outline',
    'unlock',
    'unlock-outline',
    'upload',
    'upload-outline',
    'video',
    'video-off',
    'video-off-outline',
    'video-outline',
    'volume-down',
    'volume-down-outline',
    'volume-mute',
    'volume-mute-outline',
    'volume-off',
    'volume-off-outline',
    'volume-up',
    'volume-up-outline',
    'wifi',
    'wifi-off',
    'wifi-off-outline',
    'wifi-outline'
  ];
  searchWord = '';

  constructor(
    private dialogRef: NbDialogRef<NbIconPickerComponent>) {
  }

  closeDialog(iconPath?: string) {
    this.dialogRef.close(iconPath);
  }

  async pickIconFromFile() {
    const filePath = String(await window.electronAPI.openDialogForResult(
      '%appdata%\\Pielette\\Icons',
      [{name: 'All', extensions: ['*']}]));

    this.closeDialog(await window.electronAPI.getFileIconBase64(filePath));
  }
}
