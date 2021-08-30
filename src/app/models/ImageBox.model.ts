export class ImageBoxConfig {
  height: string;
  width: string;
  borderRadius: string;
  zIndex: string;

  constructor(height: string = '', width: string = '', borderRadius: string = '', zIndex: string = '') {
    this.height = height;
    this.width = width;
    this.borderRadius = borderRadius;
    this.zIndex = zIndex;
  }
}
