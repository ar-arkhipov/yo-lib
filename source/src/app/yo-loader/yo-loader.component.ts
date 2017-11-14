import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'yo-loader',
  templateUrl: './yo-loader.component.html',
  styleUrls: ['./yo-loader.component.scss'],
  animations: [
    trigger(
      'loaderAnimation', [
        transition(':leave', [
          animate('800ms', style({left: 'calc(100% - 50px)', bottom: 'calc(100% - 50px)'}))
        ])
      ]
    )
  ],
  encapsulation: ViewEncapsulation.None
})
export class YoLoaderComponent implements OnInit {
  @Input()
  show: boolean = true;

  @Input()
  loaderText: string = '';

  constructor() { }

  ngOnInit() {
  }

}
