"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var WindowService_1 = require("../../../services/WindowService");
var BaseStepComponent = (function () {
    function BaseStepComponent(element, document, windowService) {
        this.element = element;
        this.document = document;
        this.windowService = windowService;
    }
    BaseStepComponent.prototype.onScroll = function () {
    };
    BaseStepComponent.prototype.onResize = function (event) {
    };
    BaseStepComponent.prototype.ngAfterViewInit = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        this.windowService.addStep(this.name, offset.top, offset.bottom);
        this.onScroll();
    };
    BaseStepComponent.prototype.checkEffects = function () {
    };
    BaseStepComponent.prototype.getWindowHeight = function () {
        return document.documentElement.clientHeight;
    };
    BaseStepComponent.prototype.getWindowWidth = function () {
        return document.documentElement.clientWidth - 72;
    };
    BaseStepComponent.prototype.hasTitle = function () {
        return this.step.title != undefined;
    };
    BaseStepComponent.prototype.hasInfo = function () {
        return this.step.info != undefined;
    };
    BaseStepComponent.prototype.getBackgroundColor = function () {
        return this.step.backgroundColor != undefined ? this.step.backgroundColor : 'inherit';
    };
    BaseStepComponent.prototype.goNextStep = function () {
        this.windowService.scrollToNextStep(this.name);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaseStepComponent.prototype, "step", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaseStepComponent.prototype, "name", void 0);
    __decorate([
        core_1.HostListener('window:scroll', []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaseStepComponent.prototype, "onScroll", null);
    __decorate([
        core_1.HostListener('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], BaseStepComponent.prototype, "onResize", null);
    BaseStepComponent = __decorate([
        core_1.Component({
            selector: 'base-step',
            templateUrl: '/templates/shared/steps/base/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __param(2, core_1.Inject(WindowService_1.WindowService)), 
        __metadata('design:paramtypes', [core_1.ElementRef, Object, WindowService_1.WindowService])
    ], BaseStepComponent);
    return BaseStepComponent;
}());
exports.BaseStepComponent = BaseStepComponent;
//# sourceMappingURL=BaseStep.js.map