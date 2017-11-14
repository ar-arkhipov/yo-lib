import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoTestComponent } from './yo-test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YoTestComponent],
  exports: [YoTestComponent]
})
export class YoTestModule { }
