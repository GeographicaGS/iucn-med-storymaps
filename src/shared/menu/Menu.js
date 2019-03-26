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
var DataService_1 = require("../../services/DataService");
var router_1 = require("@angular/router");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, storyService) {
        this.router = router;
        this.storyService = storyService;
        this.currentStep = 'cover';
        this.scrollTo = new core_1.EventEmitter();
        this.steps = {};
    }
    Object.defineProperty(MenuComponent.prototype, "currentStory", {
        set: function (value) {
            this.steps = value.steps || {};
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.isItemActive = function (item) {
        return item === this.currentStep;
    };
    MenuComponent.prototype.getStepsKeys = function () {
        return Object.keys(this.steps);
    };
    MenuComponent.prototype.getStepName = function (step) {
        return this.steps[step]['name'];
    };
    MenuComponent.prototype.onSectionClick = function (step) {
        this.scrollTo.emit(step);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MenuComponent.prototype, "currentStory", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "currentStep", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "scrollTo", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: '/templates/shared/menu/view.html',
        }),
        __param(1, core_1.Inject(DataService_1.DataService)),
        __metadata("design:paramtypes", [router_1.Router,
            DataService_1.DataService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=Menu.js.map