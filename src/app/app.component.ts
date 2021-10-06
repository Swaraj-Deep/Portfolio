import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scrollToView({id, toChangeAddressBar = true}: { id: string, toChangeAddressBar?: boolean }): void {
    const elem: HTMLElement | null = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
      });
      if (toChangeAddressBar) {
        window.history.pushState(`Move to ${id}`, `${id}`, `${window.location.origin}/#${id}`);
      }
    }
  }
}
