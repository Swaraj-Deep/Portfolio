import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { ImageBoxComponent } from './components/image-box/image-box.component';
import { HeaderComponent } from './components/header/header.component';
import { TextComponent } from './components/text/text.component';
import { LogoComponent } from './components/logo/logo.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

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
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
