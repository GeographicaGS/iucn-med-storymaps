"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BaseStep_1 = require("../base/BaseStep");
var platform_browser_1 = require("@angular/platform-browser");
var WindowService_1 = require("../../../services/WindowService");
var IntroStepComponent = /** @class */ (function (_super) {
    __extends(IntroStepComponent, _super);
    function IntroStepComponent(element, document, windowService) {
        var _this = _super.call(this, element, document, windowService) || this;
        _this.element = element;
        _this.document = document;
        _this.windowService = windowService;
        return _this;
    }
    IntroStepComponent.prototype.showContent = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        return (this.getWindowHeight() * 0.8) > (offset.top);
    };
    IntroStepComponent = __decorate([
        core_1.Component({
            selector: 'intro',
            templateUrl: '/templates/shared/steps/intro/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, WindowService_1.WindowService])
    ], IntroStepComponent);
    return IntroStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.IntroStepComponent = IntroStepComponent;
//# sourceMappingURL=IntroStep.js.map