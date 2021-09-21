import {Component, OnInit} from '@angular/core';
import {Skill} from "../../models/Skill.model";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [
    {
      id: '1',
      isActive: true,
      technology: 'C++',
      description: 'This was the very first language that I learnt. I use C++ to code my solutions for competitive programming contests',
    }, {
      id: '2',
      isActive: false,
      technology: 'Python',
      description: 'I have made several projects using python. I have also coded whole python solution for a research paper.',
    }, {
      id: '3',
      isActive: false,
      technology: 'React',
      description: 'I am proficient in react library. Created a food app find the link below',
    }, {
      id: '4',
      isActive: false,
      technology: 'Angular',
      description: 'I am currently working on Angular. I have created this portfolio with Angular.',
    }, {
      id: '5',
      isActive: false,
      technology: 'Java',
      description: 'Not something to be very proud of but I am familiar with java',
    }
  ];

  description: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.skills.forEach(skill => {
      if (skill.isActive) {
        this.description = skill.description;
      }
    });
  }

  setDescription(pSkill: Skill) {
    this.skills = this.skills.map(skill => {
      return skill.id !== pSkill.id ? {...skill, isActive: false} : {...skill, isActive: true};
    });
    this.description = pSkill.description;
  }
}
