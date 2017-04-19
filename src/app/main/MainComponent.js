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
var MainComponent = (function () {
    function MainComponent(element, storyService, windowService) {
        var _this = this;
        this.element = element;
        this.storyService = storyService;
        this.windowService = windowService;
        this.stories = {};
        this.currentStory = '';
        this.backgroundSrc = '';
        this.bodyClass = 'full-screen';
        this.backgroundSrc = 'url(' + this.windowService.getBodyBgUrl() + ')';
        this.windowService.getBodyBgUrlObservable().subscribe(function (src) {
            _this.backgroundSrc = 'url(' + src + ')';
        });
        this.windowService.getBodyClassObservable().subscribe(function (_class) {
            _this.bodyClass = _class;
        });
        this.currentStory = this.windowService.getCurrentStory();
        this.storyService.getObservable().subscribe(function (stories) {
            _this.stories = stories;
        });
        this.windowService.getCurrentStoryObservable().subscribe(function (currentStory) {
            _this.currentStory = currentStory;
        });
    }
    MainComponent.prototype.onScroll = function () {
        this.windowService.onScroll();
    };
    MainComponent.prototype.isStoryLoaded = function () {
        return this.stories['stories'] != undefined && this.stories['stories'][this.currentStory] != undefined;
    };
    MainComponent.prototype.areStoriesLoaded = function () {
        return this.stories['home'] != undefined && this.stories['iucnInfo'].show != true;
    };
    MainComponent.prototype.isIucnInfoLoaded = function () {
        return this.stories['iucnInfo'] !== undefined && this.stories['iucnInfo'].show == true;
    };
    MainComponent.prototype.getStepsKeys = function () {
        return this.stories['stories'] != undefined && this.stories['stories'][this.currentStory] != undefined ? Object.keys(this.stories['stories'][this.currentStory]['steps']) : [];
    };
    MainComponent.prototype.getStep = function (step) {
        return this.stories['stories'][this.currentStory]['steps'][step];
    };
    __decorate([
        core_1.HostBinding("style.background-image"),
        core_1.Input(), 
        __metadata('design:type', String)
    ], MainComponent.prototype, "backgroundSrc", void 0);
    __decorate([
        core_1.HostBinding("class"),
        core_1.Input(), 
        __metadata('design:type', String)
    ], MainComponent.prototype, "bodyClass", void 0);
    __decorate([
        core_1.HostListener('window:scroll', []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MainComponent.prototype, "onScroll", null);
    MainComponent = __decorate([
        core_1.Component({
            selector: 'body',
            templateUrl: '/templates/routes/home/view.html'
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(StoryService_1.StoryService)), 
        __metadata('design:paramtypes', [core_1.ElementRef, StoryService_1.StoryService, WindowService_1.WindowService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=MainComponent.js.map