import { Component } from '@angular/core';

@Component({
  selector: 'yo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private docUrl = 'http://localhost:4445';

  componentsList = [
    'yo-test',
    'yo-loader'
  ];

  openDoc() {
    window.open(this.docUrl, '_blank');
  }
}
