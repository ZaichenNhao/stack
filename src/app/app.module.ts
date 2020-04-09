import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavslideComponent } from './navslide/navslide.component';
import { BannerPicComponent } from './banner-pic/banner-pic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyparaMainComponent } from './bodypara-main/bodypara-main.component';
import { AboutHeaderComponent } from './about-header/about-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavslideComponent,
    BannerPicComponent,
    NavbarComponent,
    BodyparaMainComponent,
    AboutHeaderComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
