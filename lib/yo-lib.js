import { Component, Input, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, style, transition, trigger } from '@angular/animations';

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let YoTestComponent = class YoTestComponent {
    constructor() {
        this.show = true;
        this.interval = 500;
    }
    blink() {
        this.timer = setTimeout(() => {
            this.show = !this.show;
            clearTimeout(this.timer);
            this.blink();
        }, this.interval);
    }
    ngOnInit() {
        this.blink();
    }
};
__decorate$1([
    Input(),
    __metadata("design:type", Number)
], YoTestComponent.prototype, "interval", void 0);
YoTestComponent = __decorate$1([
    Component({
        selector: 'yo-test',
        template: `
    <h1 class="yo-test-component">
      <ng-content *ngIf="show"></ng-content>
    </h1>
  `,
        styles: [`
    .yo-test-component {
      display: block;
      width: 100%;
      height: 200px;
      line-height: 200px;
      text-align: center;
      font-size: 100px;
      color: white;
      background-color: green;
      font-family: 'Source Sans Pro', sans-serif; }
  `],
        encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], YoTestComponent);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let YoTestModule = class YoTestModule {
};
YoTestModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [YoTestComponent],
        exports: [YoTestComponent]
    })
], YoTestModule);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let YoLoaderComponent = class YoLoaderComponent {
    constructor() {
        this.show = true;
        this.loaderText = '';
    }
    ngOnInit() {
    }
};
__decorate$3([
    Input(),
    __metadata$1("design:type", Boolean)
], YoLoaderComponent.prototype, "show", void 0);
__decorate$3([
    Input(),
    __metadata$1("design:type", String)
], YoLoaderComponent.prototype, "loaderText", void 0);
YoLoaderComponent = __decorate$3([
    Component({
        selector: 'yo-loader',
        template: `
    <div class="yo-loader" *ngIf="show" [@loaderAnimation]>
      <div class="logo-and-text">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
        <span class="loader-text">{{loaderText}}</span>
      </div>
    </div>
  `,
        styles: [`
    .yo-loader {
      z-index: 1000;
      position: absolute;
      background-color: green;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      font-family: "Source Sans Pro", sans-serif; }
      .yo-loader .logo-and-text {
        position: relative;
        text-align: center;
        width: 150px;
        height: 150px; }
        .yo-loader .logo-and-text .loader-text {
          display: inline-block;
          margin-top: 10px;
          font-size: 20px;
          font-weight: 300;
          color: #ffffff; }

    @-webkit-keyframes transiteSize {
      0% {
        right: 0;
        bottom: 0;
        opacity: 1; }
      100% {
        right: calc(100% - 90px);
        bottom: calc(100% - 60px);
        opacity: 0; } }

    @keyframes transiteSize {
      0% {
        right: 0;
        bottom: 0;
        opacity: 1; }
      100% {
        right: calc(100% - 90px);
        bottom: calc(100% - 60px);
        opacity: 0; } }

    @-webkit-keyframes sk-bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0); }
      40% {
        -webkit-transform: scale(1); } }

    @keyframes sk-bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0); }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1); } }

    .spinner {
      margin: 100px auto 0;
      width: 70px;
      text-align: center; }

    .spinner > div {
      width: 18px;
      height: 18px;
      background-color: #fff;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }

    .spinner .bounce1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s; }

    .spinner .bounce2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s; }
  `],
        animations: [
            trigger('loaderAnimation', [
                transition(':leave', [
                    animate('800ms', style({ left: 'calc(100% - 50px)', bottom: 'calc(100% - 50px)' }))
                ])
            ])
        ],
        encapsulation: ViewEncapsulation.None
    }),
    __metadata$1("design:paramtypes", [])
], YoLoaderComponent);

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let YoLoaderModule = class YoLoaderModule {
};
YoLoaderModule = __decorate$2([
    NgModule({
        imports: [
            CommonModule,
            BrowserAnimationsModule
        ],
        declarations: [YoLoaderComponent],
        exports: [YoLoaderComponent]
    })
], YoLoaderModule);

// export * from './src/app/yo-xx/yo-xx/module';    //example

/**
 * Generated bundle index. Do not edit.
 */

export { YoLoaderComponent as ɵb, YoTestComponent as ɵa, YoTestModule, YoLoaderModule };
//# sourceMappingURL=yo-lib.js.map
