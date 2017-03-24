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
var MenuComponent = (function () {
    function MenuComponent(document) {
        this.document = document;
    }
    MenuComponent.prototype.goHome = function () {
    };
    MenuComponent.prototype.goTo = function () {
    };
    MenuComponent.prototype.isActive = function () {
        return false;
    };
    MenuComponent.prototype.goNextStory = function () {
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: './shared/menu/view.html',
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [Document])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=Menu.js.map