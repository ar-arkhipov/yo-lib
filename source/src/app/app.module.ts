import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { appRoutes, NotFoundComponent } from './app.routes';


import { AppComponent } from './app.component';
import { YoTestModule } from './yo-test/yo-test.module';
import { YoLoaderModule } from './yo-loader/yo-loader.module';
import { YoTestPreviewComponent } from './previews/yo-test-preview/yo-test-preview.component';
import { YoLoaderPreviewComponent } from './previews/yo-loader-preview/yo-loader-preview.component';
import { PreviewBlockComponent } from './previews/preview-block/preview-block.component';

// import { YoXxModule } from "./yo-xx/yo-xx.module";  //example


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PreviewBlockComponent,
    YoTestPreviewComponent,
    YoLoaderPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    YoTestModule,
    YoLoaderModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
