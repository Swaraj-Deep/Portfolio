import {Component, OnInit} from '@angular/core';
import {ImageBoxConfig} from "../../models/ImageBox.model";
import {WorkExperience} from "../../models/WorkExperience.model";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  workExperiences: WorkExperience[] = [{
    description: ["Working on Angular and JavaScript projects", "Reduced the page load time using lazy loading in Angular"],
    location: "Hyderabad",
    organization: "MAQ Software",
    startDate: new Date("09/14/2021"),
    techStack: ["JavaScript", "Python", "Angular", "C#", "Windows Presentation Foundation"],
    title: "Software Engineer 1"
  }, {
    description: ["Working on Angular and JavaScript projects", "Reduced the page load time using lazy loading in Angular"],
    location: "Hyderabad",
    organization: "Tekion",
    startDate: new Date("09/18/2021"),
    techStack: ["JavaScript", "Python", "Angular", "C#", "Windows Presentation Foundation"],
    title: "Software Engineer 2"
  }];

  constructor() {
  }

  ngOnInit(): void {
    this.workExperiences.sort((a: WorkExperience, b: WorkExperience) => {
      return b.startDate.getTime() - a.startDate.getTime();
    });
    console.log(this.workExperiences);
  }

}
