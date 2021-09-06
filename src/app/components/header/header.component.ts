import {Component, OnInit} from '@angular/core';
import {ImageBoxConfig} from "../../models/ImageBox.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  configImgSrc: ImageBoxConfig = new ImageBoxConfig({height: '50px', width: '50px', borderRadius: '50%', zIndex: '10'});
  imgSrc: string = 'https://source.unsplash.com/random';
  hoverEffect: boolean = true;
  title: string = 'Swaraj Deep';

  constructor() {
  }

  ngOnInit(): void {
  }

}
