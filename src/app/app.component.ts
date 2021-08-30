import { Component } from '@angular/core';
import {ImageBoxConfig} from "./models/ImageBox.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  configImgSrc: ImageBoxConfig = new ImageBoxConfig('150px', '150px', '50%', '10');
}
