import { Component, OnInit } from '@angular/core';
import {Project} from "../../models/Project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [{
    projectName: 'Blood Bank',
    technologiesUsed: ['HTML', 'CSS', 'Angular', 'MongoDB', 'Express', 'Node js', 'JavaScript'],
    link: 'https://sbsyb-patna.herokuapp.com/',
    description: 'A place where users can request for blood.',
    futureScope: ['Alert volunteer when a new request comes in.'],
    startDate: new Date(),
    endDate: new Date()
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
