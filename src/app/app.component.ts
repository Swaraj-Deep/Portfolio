import {Component} from '@angular/core';
import {ImageBoxConfig} from "./models/ImageBox.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "I'm Software Engineer 1 at MAQ Software";
  name: string = "Hi there, I'm Swaraj Deep.";
  configImgSrc: ImageBoxConfig = new ImageBoxConfig({height: '150px', width: '150px', borderRadius: '50%', zIndex: '10'});
  about: string = "Full stack developer with focus on efficient & scalable backend, intuitive user interface who writes clean, elegant\n" +
    "        and efficient code. I look for new challenges and opportunities that are meaningful to me. Apart from writing code, I spend\n" +
    "         my time reading about space science, ancient architecture and aqua spacing."
  imgSrc: string = '../assets/Images/image.jpg';
  time: number = 300;
}
