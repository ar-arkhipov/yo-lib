import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'yo-test',
  templateUrl: './yo-test.component.html',
  styleUrls: ['./yo-test.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YoTestComponent implements OnInit {
  show: boolean = true;
  timer: any;

  @Input()
  interval: number = 500;

  constructor() { }

  blink() {
    this.timer = setTimeout(() => {
      this.show = !this.show;
      clearTimeout(this.timer);
      this.blink();
    }, this.interval)
  }

  ngOnInit() {
    this.blink();
  }

}
