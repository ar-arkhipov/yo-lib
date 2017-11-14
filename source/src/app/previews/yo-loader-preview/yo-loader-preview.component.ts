import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'yo-loader-preview',
  templateUrl: './yo-loader-preview.component.html',
  styleUrls: ['./yo-loader-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YoLoaderPreviewComponent implements OnInit {
  mocShow: boolean = true;
  mocLoaderText: string = 'Example';

  constructor() { }

  ngOnInit() {
  }

}
