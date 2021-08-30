import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ImageBoxConfig} from "../../models/ImageBox.model";

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements AfterViewInit {

  @Input() configImgSrc: ImageBoxConfig = new ImageBoxConfig('', '', '', '');
  @Input() imgSrc: string = '';
  @ViewChild('htmlImageElement', {static: false, read: ElementRef})
  htmlImg!: ElementRef<HTMLImageElement>;

  constructor() {
  }

  private getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
    obj[key];

  ngAfterViewInit(): void {
    console.log(this.imgSrc)
    const imgTag = this.htmlImg.nativeElement;
    console.log(this.configImgSrc);
    Object.keys(this.configImgSrc).forEach((styleDescriptor: any) => {
      imgTag.style[styleDescriptor] = this.getKeyValue<keyof ImageBoxConfig, ImageBoxConfig>(styleDescriptor)(this.configImgSrc)
    });
  }

}
