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
var core_1 = require("@angular/core");
var BaseElementComponent = (function () {
    function BaseElementComponent() {
        this.item = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaseElementComponent.prototype, "item", void 0);
    BaseElementComponent = __decorate([
        core_1.Component({
            selector: 'base-element',
            templateUrl: '/shared/elements/base-element/view.html',
        }), 
        __metadata('design:paramtypes', [])
    ], BaseElementComponent);
    return BaseElementComponent;
}());
exports.BaseElementComponent = BaseElementComponent;
//# sourceMappingURL=BaseElement.js.map