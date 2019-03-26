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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var WindowService_1 = require("../../../services/WindowService");
var BaseStepComponent = /** @class */ (function () {
    function BaseStepComponent(element, document, windowService) {
        this.element = element;
        this.document = document;
        this.windowService = windowService;
        this.scrollNext = new core_1.EventEmitter();
    }
    // @HostListener('window:scroll', [])
    BaseStepComponent.prototype.onScroll = function () {
        this.checkBackground();
    };
    BaseStepComponent.prototype.onResize = function (event) {
    };
    BaseStepComponent.prototype.checkBackground = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        if (this.windowService.scrollingDown() && (offset.top) <= this.getWindowHeight() ||
            !this.windowService.scrollingDown() && (offset.bottom) < (this.getWindowHeight() + offset.height)) {
            var _class = this.step.background !== undefined && this.step.background.class !== undefined ? this.step.background.class : '';
            var _url = this.step.background !== undefined && this.step.background.url !== undefined ? this.step.background.url : '';
            this.windowService.setBodyBgClass(_class);
            this.windowService.setBodyBgUrl('url(' + _url + ')');
        }
    };
    BaseStepComponent.prototype.ngAfterViewInit = function () {
        this.onScroll();
    };
    BaseStepComponent.prototype.getWindowHeight = function () {
        return document.documentElement.clientHeight;
    };
    BaseStepComponent.prototype.getWindowWidth = function () {
        return document.documentElement.clientWidth - 72;
    };
    BaseStepComponent.prototype.hasTitle = function () {
        return this.step.title !== undefined;
    };
    BaseStepComponent.prototype.hasInfo = function () {
        return this.step.info !== undefined;
    };
    BaseStepComponent.prototype.getBackgroundColor = function () {
        return this.step.backgroundColor !== undefined ? this.step.backgroundColor : 'inherit';
    };
    BaseStepComponent.prototype.hasBackgroundCredit = function () {
        return this.step.background.credit !== undefined;
    };
    BaseStepComponent.prototype.goNextStep = function () {
        this.scrollNext.emit();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], BaseStepComponent.prototype, "step", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BaseStepComponent.prototype, "scrollNext", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BaseStepComponent.prototype, "onResize", null);
    BaseStepComponent = __decorate([
        core_1.Component({
            selector: 'base-step',
            templateUrl: '/templates/shared/steps/base/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, WindowService_1.WindowService])
    ], BaseStepComponent);
    return BaseStepComponent;
}());
exports.BaseStepComponent = BaseStepComponent;
//# sourceMappingURL=BaseStep.js.map