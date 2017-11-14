(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser/animations'), require('@angular/animations')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser/animations', '@angular/animations'], factory) :
	(factory((global['yo-lib'] = {}),global.ng.core,global.ng.common,global.ng.platformBrowser.animations,global.ng.animations));
}(this, (function (exports,core,common,animations,animations$1) { 'use strict';

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
exports.ɵa = (function () {
    function YoTestComponent() {
        this.show = true;
        this.interval = 500;
    }
    YoTestComponent.prototype.blink = function () {
        var _this = this;
        this.timer = setTimeout(function () {
            _this.show = !_this.show;
            clearTimeout(_this.timer);
            _this.blink();
        }, this.interval);
    };
    YoTestComponent.prototype.ngOnInit = function () {
        this.blink();
    };
    return YoTestComponent;
}());
__decorate$1([
    core.Input(),
    __metadata("design:type", Number)
], exports.ɵa.prototype, "interval", void 0);
exports.ɵa = __decorate$1([
    core.Component({
        selector: 'yo-test',
        template: "\n    <h1 class=\"yo-test-component\">\n      <ng-content *ngIf=\"show\"></ng-content>\n    </h1>\n  ",
        styles: ["\n    .yo-test-component {\n      display: block;\n      width: 100%;\n      height: 200px;\n      line-height: 200px;\n      text-align: center;\n      font-size: 100px;\n      color: white;\n      background-color: green;\n      font-family: 'Source Sans Pro', sans-serif; }\n  "],
        encapsulation: core.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], exports.ɵa);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.YoTestModule = (function () {
    function YoTestModule() {
    }
    return YoTestModule;
}());
exports.YoTestModule = __decorate([
    core.NgModule({
        imports: [
            common.CommonModule
        ],
        declarations: [exports.ɵa],
        exports: [exports.ɵa]
    })
], exports.YoTestModule);
var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(k, v);
};
exports.ɵb = (function () {
    function YoLoaderComponent() {
        this.show = true;
        this.loaderText = '';
    }
    YoLoaderComponent.prototype.ngOnInit = function () {
    };
    return YoLoaderComponent;
}());
__decorate$3([
    core.Input(),
    __metadata$1("design:type", Boolean)
], exports.ɵb.prototype, "show", void 0);
__decorate$3([
    core.Input(),
    __metadata$1("design:type", String)
], exports.ɵb.prototype, "loaderText", void 0);
exports.ɵb = __decorate$3([
    core.Component({
        selector: 'yo-loader',
        template: "\n    <div class=\"yo-loader\" *ngIf=\"show\" [@loaderAnimation]>\n      <div class=\"logo-and-text\">\n        <div class=\"spinner\">\n          <div class=\"bounce1\"></div>\n          <div class=\"bounce2\"></div>\n          <div class=\"bounce3\"></div>\n        </div>\n        <span class=\"loader-text\">{{loaderText}}</span>\n      </div>\n    </div>\n  ",
        styles: ["\n    .yo-loader {\n      z-index: 1000;\n      position: absolute;\n      background-color: green;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      color: #fff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-family: \"Source Sans Pro\", sans-serif; }\n      .yo-loader .logo-and-text {\n        position: relative;\n        text-align: center;\n        width: 150px;\n        height: 150px; }\n        .yo-loader .logo-and-text .loader-text {\n          display: inline-block;\n          margin-top: 10px;\n          font-size: 20px;\n          font-weight: 300;\n          color: #ffffff; }\n\n    @-webkit-keyframes transiteSize {\n      0% {\n        right: 0;\n        bottom: 0;\n        opacity: 1; }\n      100% {\n        right: calc(100% - 90px);\n        bottom: calc(100% - 60px);\n        opacity: 0; } }\n\n    @keyframes transiteSize {\n      0% {\n        right: 0;\n        bottom: 0;\n        opacity: 1; }\n      100% {\n        right: calc(100% - 90px);\n        bottom: calc(100% - 60px);\n        opacity: 0; } }\n\n    @-webkit-keyframes sk-bouncedelay {\n      0%, 80%, 100% {\n        -webkit-transform: scale(0); }\n      40% {\n        -webkit-transform: scale(1); } }\n\n    @keyframes sk-bouncedelay {\n      0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0); }\n      40% {\n        -webkit-transform: scale(1);\n        transform: scale(1); } }\n\n    .spinner {\n      margin: 100px auto 0;\n      width: 70px;\n      text-align: center; }\n\n    .spinner > div {\n      width: 18px;\n      height: 18px;\n      background-color: #fff;\n      border-radius: 100%;\n      display: inline-block;\n      -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      animation: sk-bouncedelay 1.4s infinite ease-in-out both; }\n\n    .spinner .bounce1 {\n      -webkit-animation-delay: -0.32s;\n      animation-delay: -0.32s; }\n\n    .spinner .bounce2 {\n      -webkit-animation-delay: -0.16s;\n      animation-delay: -0.16s; }\n  "],
        animations: [
            animations$1.trigger('loaderAnimation', [
                animations$1.transition(':leave', [
                    animations$1.animate('800ms', animations$1.style({ left: 'calc(100% - 50px)', bottom: 'calc(100% - 50px)' }))
                ])
            ])
        ],
        encapsulation: core.ViewEncapsulation.None
    }),
    __metadata$1("design:paramtypes", [])
], exports.ɵb);
var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.YoLoaderModule = (function () {
    function YoLoaderModule() {
    }
    return YoLoaderModule;
}());
exports.YoLoaderModule = __decorate$2([
    core.NgModule({
        imports: [
            common.CommonModule,
            animations.BrowserAnimationsModule
        ],
        declarations: [exports.ɵb],
        exports: [exports.ɵb]
    })
], exports.YoLoaderModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=yo-lib.umd.js.map
