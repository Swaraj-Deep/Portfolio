import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ImageBoxConfig} from "../../models/ImageBox.model";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements AfterViewInit {

  @Input() hoverEffect: boolean = false;
  @Input() configImgSrc: ImageBoxConfig = new ImageBoxConfig({});
  @Input() imgSrc: string = '';
  @ViewChild('htmlImageElement', {static: false, read: ElementRef})
  htmlImg!: ElementRef<HTMLImageElement>;

  constructor() {
  }

  private getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
    obj[key];

  ngAfterViewInit(): void {
    const imgTag = this.htmlImg.nativeElement;
    Object.keys(this.configImgSrc).forEach((styleDescriptor: any) => {
      imgTag.style[styleDescriptor] = this.getKeyValue<keyof ImageBoxConfig, ImageBoxConfig>(styleDescriptor)(this.configImgSrc);
    });
  }

}
