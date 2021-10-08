import { Component, OnInit } from '@angular/core';
import {Education} from "../../models/Education.model";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: Education[] = [
    {
      instituteName: "National Institute of Technology, Durgapur",
      courseName: "Master of Computer Applications",
      startDate: new Date('2018'),
      endDate: new Date('2021'),
      cgpa: '8.31 out of 10',
    },
    {
      instituteName: "Arcade Business College, Patna",
      courseName: "Bachelor of Computer Applications",
      startDate: new Date('2015'),
      endDate: new Date('2018'),
      percentage: '76.50% out of 100',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
