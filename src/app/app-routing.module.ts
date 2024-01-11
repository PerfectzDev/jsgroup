import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CambodiaBusinessComponent} from "./components/cambodia-business/cambodia-business.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {MalaysiaBusinessComponent} from "./components/malaysia-business/malaysia-business.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'malaysia-business', component: MalaysiaBusinessComponent},
  {path: 'cambodia-business', component: CambodiaBusinessComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
