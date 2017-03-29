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
var WindowService_1 = require("../../services/WindowService");
var StoryService_1 = require("../../services/StoryService");
var MenuComponent = (function () {
    function MenuComponent(windowService, storyService) {
        var _this = this;
        this.windowService = windowService;
        this.storyService = storyService;
        this.currentStep = 'cover';
        this.stories = {};
        this.currentStory = {};
        this.currentStory = this.windowService.getCurrentStory();
        this.currentStep = this.windowService.getCurrentStep();
        this.stories = this.storyService.getStories();
        this.windowService.getCurrentStepObservable().subscribe(function (nextStep) {
            _this.currentStep = nextStep;
        });
        this.windowService.getCurrentStoryObservable().subscribe(function (currentStory) {
            _this.currentStory = currentStory;
        });
        this.storyService.getObservable().subscribe(function (stories) {
            _this.stories = stories;
        });
    }
    MenuComponent.prototype.isItemActive = function (item) {
        return item == this.currentStep;
    };
    MenuComponent.prototype.getStepsKeys = function () {
        return this.stories[this.currentStory] != undefined ? Object.keys(this.stories[this.currentStory]['steps']) : [];
    };
    MenuComponent.prototype.getStepName = function (step) {
        return this.stories[this.currentStory]['steps'][step]['name'];
    };
    MenuComponent.prototype.scrollTo = function (step) {
        this.windowService.scrollToStep(step);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: '/templates/shared/menu/view.html',
        }),
        __param(0, core_1.Inject(WindowService_1.WindowService)),
        __param(1, core_1.Inject(StoryService_1.StoryService)), 
        __metadata('design:paramtypes', [WindowService_1.WindowService, StoryService_1.StoryService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=Menu.js.map