import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PartnersComponent} from "./components/partners/partners.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
