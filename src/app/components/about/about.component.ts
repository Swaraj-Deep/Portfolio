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
    description: ["Worked on REST API solution in ASP.NET MVC pattern", "Implemented the frontend to interact with the REST\n"
    +
    "    API in Angular(TypeScript, SCSS)", "    Rate limited Endpoints using the customer token (Per\n" +
    "    customer token only 100 requests to be made per\n" +
    "    minute)", "Optimized the response time by 50% using cache"],
    location: "Hyderabad",
    organization: "MAQ Software",
    startDate: new Date("07/05/2021"),
    techStack: ["JavaScript", ".NET framework", "Angular", "C#", "ASP.NET", "TypeScript", "Nodejs", "Python", "HTML", "CSS"],
    title: "Software Engineer 1"
  }, {


    description: ["Reduced Overall bundle size by 5% using generic API\n" +
    "    call methods in Angular services rather than separate\n" +
    "    function for each API calls", "Made the design responsive for various devices.", "Reduced load time by 30% using lazy loading for not so commonly used modules."],
    location: "Hyderabad",
    organization: "MAQ Software",
    startDate: new Date("01/04/2021"),
    endDate: new Date("04/03/2021"),
    techStack: ["JavaScript", "Angular", "HTML", "CSS", "Nodejs", "TypeScript"],
    title: "Associate Software Engineer"
  }

  ]
  ;

  constructor() {
  }

  ngOnInit()
    :
    void {
    this.workExperiences.sort((a: WorkExperience, b: WorkExperience) => {
      return b.startDate.getTime() - a.startDate.getTime();
    });
  }

}
