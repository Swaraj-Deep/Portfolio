export class ImageBoxConfig {
  height: string;
  width: string;
  borderRadius: string;
  zIndex: string;
  marginTop: string;
  marginLeft: string;
  marginRight: string;
  marginBottom: string;

  constructor({
                height = '',
                width = '',
                borderRadius = '',
                zIndex = '',
                marginTop = '',
                marginBottom = '',
                marginLeft = '',
                marginRight = ''
              }) {
    this.height = height;
    this.width = width;
    this.borderRadius = borderRadius;
    this.zIndex = zIndex;
    this.marginTop = marginTop;
    this.marginLeft = marginLeft;
    this.marginBottom = marginBottom;
    this.marginRight = marginRight;
  }
}
