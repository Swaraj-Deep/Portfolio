import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {

  @Input() displayCloseIcon: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
