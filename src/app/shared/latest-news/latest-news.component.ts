import { Component,Input } from '@angular/core';
import {ImageModel}from '../../models/image.model';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})

export class LatestNewsComponent {

  @Input() images: ImageModel[] = [];

}
