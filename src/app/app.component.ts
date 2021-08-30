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
  configImgSrc: ImageBoxConfig = new ImageBoxConfig('150px', '150px', '50%', '10', '-10em !important');
  imgSrc: string = '../assets/Images/image.jpg';
  techStacks: string[] = ['MEAN Stack.', 'MERN Stack.', 'JavaScript.', 'Python.'];
  time: number = 300;
  greeting: string = 'Hi there, I code business requirements using '
  familiar: string = 'I am familiar with ';
  familiarStacks: string[] = ['Java', 'Go', '.NET Core', 'C#', 'Power BI', 'Azure Devops'];
}
