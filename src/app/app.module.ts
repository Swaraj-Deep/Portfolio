import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from './components/card/card.component';
import {ButtonComponent} from './components/button/button.component';
import {ImageBoxComponent} from './components/image-box/image-box.component';
import {HeaderComponent} from './components/header/header.component';
import {TextComponent} from './components/text/text.component';
import {LogoComponent} from './components/logo/logo.component';
import {HamburgerComponent} from './components/hamburger/hamburger.component';
import {HomeComponent} from './components/home/home.component';
import {ExperienceComponent} from './components/experience/experience.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {EducationComponent} from "./components/education/education.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    ImageBoxComponent,
    HeaderComponent,
    TextComponent,
    LogoComponent,
    HamburgerComponent,
    HomeComponent,
    ExperienceComponent,
    PublicationsComponent,
    SkillsComponent,
    SectionTitleComponent,
    ProjectsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
