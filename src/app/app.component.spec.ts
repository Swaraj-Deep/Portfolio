import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {HomeComponent} from "./components/home/home.component";
import {TextComponent} from "./components/text/text.component";
import {ImageBoxComponent} from "./components/image-box/image-box.component";
import {HamburgerComponent} from "./components/hamburger/hamburger.component";
import {LogoComponent} from "./components/logo/logo.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ExperienceComponent,
        HomeComponent,
        TextComponent,
        ImageBoxComponent,
        HamburgerComponent,
        LogoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
