import {Component, OnInit} from '@angular/core';
import {ImageBoxConfig} from "../../models/ImageBox.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "I'm Software Engineer 1 at MAQ Software";
  name: string = "Hi there, I'm Swaraj Deep.";
  configImgSrc: ImageBoxConfig = new ImageBoxConfig({
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    zIndex: '10'
  });
  about: string = "Full stack developer with focus on efficient & scalable backend, intuitive user interface who writes clean, elegant\n" +
    "        and efficient code. I look for new challenges and opportunities that are meaningful to me. Apart from writing code, I spend\n" +
    "         my time reading space science, ancient architecture and aqua spacing."
  imgSrc: string = '../assets/Images/image.jpg';

  constructor() {
  }

  ngOnInit(): void {
  }

}
