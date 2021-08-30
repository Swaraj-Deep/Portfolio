import {Component} from '@angular/core';
import {ImageBoxConfig} from "./models/ImageBox.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Software Engineer 1 at MAQ Software';
  name: string = 'Swaraj Deep'
  configImgSrc: ImageBoxConfig = new ImageBoxConfig('150px', '150px', '50%', '10');
  imgSrc: string = 'https://source.unsplash.com/random';
}
