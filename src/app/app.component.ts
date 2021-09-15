import {Component} from '@angular/core';
import {ImageBoxConfig} from "./models/ImageBox.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scrollToView(id: string): void {
    const elem: HTMLElement = document.getElementById(id)!;
    elem.scrollIntoView({
      behavior: "smooth"
    });
  }
}
