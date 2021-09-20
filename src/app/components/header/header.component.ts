import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ImageBoxConfig} from "../../models/ImageBox.model";
import {Link} from "../../models/Link.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onLinkClick: EventEmitter<string> = new EventEmitter<string>();
  configImgSrc: ImageBoxConfig = new ImageBoxConfig({height: '50px', width: '50px', borderRadius: '50%', zIndex: '10'});
  imgSrc: string = '../assets/Images/image.jpg';
  hoverEffect: boolean = true;
  leftLinks: Link[] = [{toDisplay: 'Swaraj Deep', actualLink: 'home'}];
  rightLinks: Link[] = [
    {toDisplay: 'Experience', actualLink: 'experience'},
    {toDisplay: 'Publications', actualLink: 'publications'},
    {toDisplay: 'Projects', actualLink: 'projects'},
    {toDisplay: 'Skills', actualLink: 'skills'},
    {toDisplay: 'Education', actualLink: 'education'},
    {toDisplay: 'Interests', actualLink: 'interests'},
    {toDisplay: 'Resume', actualLink: 'resume'}];
  private isHamOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleNavBar(): void {
    this.isHamOpen = !this.isHamOpen;
  }

  getHamStatus(): boolean {
    return this.isHamOpen;
  }

  navigateTo(link: string, $event: MouseEvent) {
    this.onLinkClick.emit(link);
    const elem: HTMLElement | null = ($event.target as HTMLElement).closest('app-text');
    const activeList: HTMLElement | null = document.querySelector('.link-active');
    if (elem) {
      if (activeList) {
        activeList.classList.remove('link-active');
      }
      elem.classList.add('link-active')
    }
  }

}
