import { Component,Input } from '@angular/core';
import {BusinessModel}from '../../models/business.model';

@Component({
  selector: 'app-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.css']
})

export class CardFlipComponent {

  @Input() business: BusinessModel = {title: '', listOfBusinessLogoPath: []};

}
