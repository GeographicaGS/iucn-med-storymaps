"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BaseStep_1 = require("../base/BaseStep");
var SkipStepComponent = (function (_super) {
    __extends(SkipStepComponent, _super);
    function SkipStepComponent() {
        _super.apply(this, arguments);
    }
    SkipStepComponent.prototype.onScroll = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        if (this.windowService.getBodyClass() !== 'locked' && this.windowService.getScrollTop() >= offset.top - 20 && this.windowService.getScrollTop() < offset.bottom + 25) {
            this.windowService.setBodyBgUrl(this.step.background.url);
            //Todo:: Detect why the offset when background is locked is top - 20px
            this.windowService.setBodyBgClass(this.step.background.class);
        }
        _super.prototype.onScroll.call(this);
    };
    SkipStepComponent.prototype.showImage = function () {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.5)) > offset.top;
    };
    SkipStepComponent.prototype.showTitle = function () {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.6)) > offset.top;
    };
    SkipStepComponent.prototype.showButton = function () {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.7)) > offset.top
    };
    SkipStepComponent = __decorate([
        core_1.Component({
            selector: 'skip-step',
            templateUrl: '/templates/shared/steps/skip/view.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SkipStepComponent);
    return SkipStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.SkipStepComponent = SkipStepComponent;
//# sourceMappingURL=SkipStep.js.map