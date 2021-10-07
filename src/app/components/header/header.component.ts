import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {ImageBoxConfig} from "../../models/ImageBox.model";
import {Link} from "../../models/Link.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @Output() onLinkClick: EventEmitter<{ id: string, toChangeAddressBar?: boolean }> = new EventEmitter<{ id: string, toChangeAddressBar?: boolean }>();
  configImgSrc: ImageBoxConfig = new ImageBoxConfig({height: '50px', width: '50px', borderRadius: '50%', zIndex: '10'});
  imgSrc: string = '../assets/Images/image.jpg';
  hoverEffect: boolean = true;
  leftLinks: Link[] = [{toDisplay: 'Swaraj Deep', actualLink: 'home'}];
  rightLinks: Link[] = [
    {toDisplay: 'Experience', actualLink: 'experience'},
    {toDisplay: 'Skills', actualLink: 'skills'},
    {toDisplay: 'Publications', actualLink: 'publications'},
    {toDisplay: 'Projects', actualLink: 'projects'},
    {toDisplay: 'Education', actualLink: 'education'},
    {toDisplay: 'Resume', actualLink: 'resume'}];
  private isHamOpen: boolean = false;

  constructor() {
  }

  private setLinkStateOnLoad() {
    this.leftLinks = this.leftLinks.map((link) => {
      return {...link, isActive: window.location.hash.slice(1) === link.actualLink};
    });
    this.rightLinks = this.rightLinks.map((link) => {
      return {...link, isActive: window.location.hash.slice(1) === link.actualLink};
    });
  }

  ngAfterViewInit(): void {
    this.setLinkStateOnLoad()
    window.addEventListener('popstate', () => {
      this.onLinkClick.emit({id: window.location.hash.slice(1), toChangeAddressBar: false});
      this.setLinkStateOnLoad();
    });
  }

  toggleNavBar(): void {
    this.isHamOpen = !this.isHamOpen;
  }

  getHamStatus(): boolean {
    return this.isHamOpen;
  }

  private setLinkState(pLink: Link) {
    this.leftLinks = this.leftLinks.map(link => {
      return pLink.actualLink === link.actualLink ? {...link, isActive: true} : {...link, isActive: false};
    });
    this.rightLinks = this.rightLinks.map(link => {
      return pLink.actualLink === link.actualLink ? {...link, isActive: true} : {...link, isActive: false};
    });
  }

  navigateTo(pLink: Link) {
    this.setLinkState(pLink);
    this.onLinkClick.emit({id: pLink.actualLink});
  }

}
