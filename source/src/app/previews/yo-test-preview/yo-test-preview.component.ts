import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'yo-test-preview',
  templateUrl: './yo-test-preview.component.html',
  styleUrls: ['./yo-test-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YoTestPreviewComponent implements OnInit {
  mocInterval: number = 500;

  constructor() { }

  ngOnInit() {
  }

}
