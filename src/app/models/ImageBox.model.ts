export class ImageBoxConfig {
  height: string;
  width: string;
  borderRadius: string;
  zIndex: string;
  marginTop: string;

  constructor(height: string = '', width: string = '', borderRadius: string = '', zIndex: string = '', marginTop: string = '') {
    this.height = height;
    this.width = width;
    this.borderRadius = borderRadius;
    this.zIndex = zIndex;
    this.marginTop = marginTop;
  }
}
