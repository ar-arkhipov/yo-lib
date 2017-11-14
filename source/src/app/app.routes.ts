import { Routes } from "@angular/router";
import { Component } from '@angular/core';
import { YoTestPreviewComponent } from "./previews/yo-test-preview/yo-test-preview.component";
import { YoLoaderPreviewComponent } from "./previews/yo-loader-preview/yo-loader-preview.component";

@Component({
  selector: 'not-found',
  template: '<h1>Select existing component</h1>'
})
export class NotFoundComponent {
}

export const appRoutes: Routes = [
  {
    path: 'yo-test',     //selector
    component: YoTestPreviewComponent //imported component
  },
  {
    path: 'yo-loader',
    component: YoLoaderPreviewComponent
  },
  // {
  //   path: 'user-selector-here',       //example
  //   component: YoYourPreviewComponent  //example
  // },
  { path: '**', component: NotFoundComponent}
];





