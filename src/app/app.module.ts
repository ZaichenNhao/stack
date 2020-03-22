import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavslideComponent } from './navslide/navslide.component';
import { HeaderComponent } from './header/header.component';
import { BannerPicComponent } from './banner-pic/banner-pic.component';
import { BodyParaComponent } from './body-para/body-para.component';

@NgModule({
  declarations: [
    AppComponent,
    NavslideComponent,
    HeaderComponent,
    BannerPicComponent,
    BodyParaComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
