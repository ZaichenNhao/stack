import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavslideComponent } from './navslide/navslide.component';
import { BannerPicComponent } from './banner-pic/banner-pic.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavslideComponent,
    BannerPicComponent,
    NewMenuComponent,
    NavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
