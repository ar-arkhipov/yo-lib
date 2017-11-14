import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoLoaderComponent } from './yo-loader.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [YoLoaderComponent],
  exports: [YoLoaderComponent]
})
export class YoLoaderModule { }
