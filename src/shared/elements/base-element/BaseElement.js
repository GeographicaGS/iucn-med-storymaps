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
var WindowService_1 = require("../../../services/WindowService");
var BaseElementComponent = (function () {
    function BaseElementComponent(element, windowService) {
        this.element = element;
        this.windowService = windowService;
        this.item = {};
    }
    BaseElementComponent.prototype.hasInfo = function () {
        return this.item.info != undefined
            && this.item.info.elements != undefined
            && this.item.info.elements.length > 0;
    };
    BaseElementComponent.prototype.hasCredit = function () {
        return this.item.credit != undefined;
    };
    BaseElementComponent.prototype.showContent = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        return !this.windowService.scrollingDown() || (this.windowService.getWindowHeight() * 0.9) > (offset.top);
    };
    BaseElementComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaseElementComponent.prototype, "item", void 0);
    BaseElementComponent = __decorate([
        core_1.Component({
            selector: 'base-element',
            templateUrl: '/templates/shared/elements/base-element/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(WindowService_1.WindowService)), 
        __metadata('design:paramtypes', [core_1.ElementRef, WindowService_1.WindowService])
    ], BaseElementComponent);
    return BaseElementComponent;
}());
exports.BaseElementComponent = BaseElementComponent;
//# sourceMappingURL=BaseElement.js.map