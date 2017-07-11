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
var HomeStepComponent = (function (_super) {
    __extends(HomeStepComponent, _super);
    function HomeStepComponent() {
        _super.apply(this, arguments);
        this.stories = {};
        this.scaling = '';
        this.scalingInProgress = false;
    }
    HomeStepComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // setting a timeout so that it works on safari .... 
        setTimeout(function () {
            _this.checkBackground();
        }, 100);
    };
    HomeStepComponent.prototype.checkBackground = function () {
        var _class = this.step.background != undefined && this.step.background.class != undefined ? this.step.background.class : '';
        var _url = this.step.background != undefined && this.step.background.url != undefined ? this.step.background.url : '';
        this.windowService.setBodyBgClass(_class);
        this.windowService.setBodyBgUrl('url( ' + _url + ')');
        if (!this.windowService.homeViewPreview && !this.windowService.aboutView) {
            this.addBackgroundBlur();
        }
    };
    HomeStepComponent.prototype.addBackgroundBlur = function () {
        var _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class + ' blur');
    };
    HomeStepComponent.prototype.clearBackgroundBlur = function () {
        var _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('blur', ''));
    };
    HomeStepComponent.prototype.clearBackgroundFullScreen = function () {
        var _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('full-screen', ''));
    };
    HomeStepComponent.prototype.clearBackgroundGradient = function () {
        var _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('gradient', ''));
    };
    HomeStepComponent.prototype.unlockBackground = function () {
        var _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('locked', ''));
    };
    HomeStepComponent.prototype.getPreviewTitle = function () {
        return this.stories.home.preview.title;
    };
    HomeStepComponent.prototype.hasPreviewTitle = function () {
        return this.stories.home.preview.title != '';
    };
    HomeStepComponent.prototype.getListTitle = function () {
        return this.stories.home.list.title;
    };
    HomeStepComponent.prototype.showStoryList = function () {
        this.windowService.homeViewPreview = false;
        this.windowService.goHome();
    };
    HomeStepComponent.prototype.showMoreInfo = function () {
        this.windowService.clearBodyUrl();
        this.unlockBackground();
        this.clearBackgroundBlur();
        this.clearBackgroundGradient();
        this.windowService.aboutView = true;
    };
    HomeStepComponent.prototype.isPreview = function () {
        return this.windowService.homeViewPreview;
    };
    HomeStepComponent.prototype.isScaling = function (story) {
        return this.scaling == story;
    };
    HomeStepComponent.prototype.hasSomeScaling = function () {
        return this.scaling != '';
    };
    HomeStepComponent.prototype.getPreviewDescription = function () {
        return this.stories.home.preview.description;
    };
    HomeStepComponent.prototype.getPreviewSubtitle = function () {
        return this.stories.home.preview.subtitle;
    };
    HomeStepComponent.prototype.getPreviewImageSrc = function () {
        return this.stories.home.preview.img;
    };
    HomeStepComponent.prototype.hasCredit = function () {
        return this.stories.home.background.credit != undefined;
    };
    HomeStepComponent.prototype.showCredits = function () {
        return this.hasCredit() && this.isPreview();
    };
    HomeStepComponent.prototype.hasDescription = function () {
        return this.hasCredit() && this.stories.home.background.credit.description != undefined;
    };
    HomeStepComponent.prototype.showDescription = function () {
        return this.hasDescription() && this.isPreview();
    };
    HomeStepComponent.prototype.showPreview = function () {
        this.windowService.homeViewPreview = true;
        this.clearBackgroundBlur();
    };
    HomeStepComponent.prototype.getStoriesKeys = function () {
        return Object.keys(this.stories['stories']);
    };
    HomeStepComponent.prototype.getStoryTitle = function (story) {
        return this.stories['stories'][story].steps.cover.title;
    };
    HomeStepComponent.prototype.getStoryBackgroundSrc = function (story) {
        return this.stories['stories'][story].steps.cover.background.url;
    };
    HomeStepComponent.prototype.goToStory = function (story) {
        this.scaling = story;
        this.scalingInProgress = true;
        this.goTo(story, 'cover');
    };
    HomeStepComponent.prototype.goToMap = function (story) {
        this.goTo(story, 'map');
    };
    HomeStepComponent.prototype.goTo = function (story, step) {
        var _this = this;
        setTimeout(function () {
            _this.unlockBackground();
            _this.clearBackgroundBlur();
            _this.clearBackgroundGradient();
            _this.clearBackgroundFullScreen();
            _this.windowService.setBodyBgUrl(_this.getStoryBackgroundSrc(story));
            _this.windowService.setCurrentStory(story);
            setTimeout(function () {
                _this.windowService.scrollToStep(step);
                _this.scalingInProgress = false;
            }, 25);
        }, 1000);
    };
    HomeStepComponent.prototype.showDescriptionImage = function () {
        return this.getWindowWidth() > 800 && this.getWindowHeight() > 750;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], HomeStepComponent.prototype, "stories", void 0);
    HomeStepComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: '/templates/shared/steps/home/view.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HomeStepComponent);
    return HomeStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.HomeStepComponent = HomeStepComponent;
//# sourceMappingURL=HomeStep.js.map