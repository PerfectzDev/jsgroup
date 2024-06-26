import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {HomeComponent} from "./components/home/home.component";
import {CardFlipComponent} from "./shared/card-flip/card-flip.component";
import {TitleAnimationComponent} from "./shared/title-animation/title-animation.component";
import {TimelineComponent} from "./shared/timeline/timeline.component";
import {LatestNewsComponent} from "./shared/latest-news/latest-news.component";
import {AppRoutingModule} from "./app-routing.module";
import {CambodiaBusinessComponent} from "./components/cambodia-business/cambodia-business.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {HeaderComponent} from "./components/header/header.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MalaysiaBusinessComponent} from "./components/malaysia-business/malaysia-business.component";
import {InvestorRelationComponent} from "./components/investor-relation/investor-relation.component";
import {MediaComponent} from "./components/media/media.component";
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CambodiaBusinessComponent,
    MalaysiaBusinessComponent,
    AboutUsComponent,
    ContactUsComponent,
    InvestorRelationComponent,
    MediaComponent,
    CardFlipComponent,
    TimelineComponent,
    LatestNewsComponent,
    TitleAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule,
    NzCarouselModule,
    NzCardModule,
    NzButtonModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
