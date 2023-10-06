export enum PieMenuActivationMode {
  RELEASE_THEN_HOVER_OVER = "releaseThenHoverOver",
  HOVER_OVER_THEN_RELEASE = "hoverOverThenRelease",
  HOVER_OVER_ALL = "hoverOverAll",
  CLICK = "click"
}

export interface IPieMenu {
  name: string;
  enabled: boolean;
  activationMode: PieMenuActivationMode;
  hotkey: string;
  escapeRadius: number;
  openInScreenCenter: boolean;
  mainColor: string;
  secondaryColor: string;
  iconSize: number;
  centerRadius: number;
  centerThickness: number;
  pieItemSpread: number;
  pieItemRoundness: number;
  pieItemIds: number[];
  id?: number;
}

export class PieMenu implements IPieMenu {
  constructor(
    public name = "New Pie Menu",
    public enabled = true,
    public activationMode = PieMenuActivationMode.HOVER_OVER_THEN_RELEASE,
    public hotkey = '',
    public escapeRadius = 0,
    public openInScreenCenter = false,
    public mainColor = '#1DAEAA',
    public secondaryColor: string = '#1DAEAA',  // TODO: Need to be changed
    public pieItemIds: number[] = [],
    public centerRadius: number = 20,
    public centerThickness: number = 10,
    public iconSize: number = 16,
    public pieItemRoundness: number = 7,
    public pieItemSpread: number = 150,
    public id?: number
  ) {}


}
