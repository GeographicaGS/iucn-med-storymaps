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
var CoverStepComponent = (function (_super) {
    __extends(CoverStepComponent, _super);
    function CoverStepComponent() {
        _super.apply(this, arguments);
    }
    CoverStepComponent.prototype.showTitle = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        return (this.getWindowHeight() * 0.70) < (offset.bottom);
    };
    CoverStepComponent.prototype.showButton = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        return offset.bottom > 200;
    };
    CoverStepComponent.prototype.hasBackgroundCredit = function () {
        return this.step.background.credit != undefined;
    };
    CoverStepComponent.prototype.onScroll = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        if (this.windowService.getScrollTop() >= offset.top - 100 && this.windowService.getScrollTop() < offset.bottom + 25) {
            this.windowService.setBodyBgUrl(this.step.background.url);
            this.windowService.setBodyBgClass(this.step.background.class);
        }
        _super.prototype.onScroll.call(this);
    };
    CoverStepComponent = __decorate([
        core_1.Component({
            selector: 'cover-step',
            templateUrl: '/templates/shared/steps/cover/view.html',
        }), 
        __metadata('design:paramtypes', [])
    ], CoverStepComponent);
    return CoverStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.CoverStepComponent = CoverStepComponent;
//# sourceMappingURL=CoverStep.js.map