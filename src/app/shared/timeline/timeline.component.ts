import { Component, ElementRef, HostListener, OnInit, Input } from '@angular/core';
import {MileStoneModel}from '../../models/milestone.model';

@Component({
selector: 'app-timeline',
templateUrl: './timeline.component.html',
styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
@Input() mileStones: MileStoneModel[] = [];


}
