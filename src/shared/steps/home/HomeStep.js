"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var WindowService_1 = require("../../../services/WindowService");
var platform_browser_1 = require("@angular/platform-browser");
var HomeStepComponent = /** @class */ (function (_super) {
    __extends(HomeStepComponent, _super);
    function HomeStepComponent(element, document, windowService) {
        var _this = _super.call(this, element, document, windowService) || this;
        _this.element = element;
        _this.document = document;
        _this.windowService = windowService;
        _this.stories = {};
        _this.scaling = '';
        _this.scalingInProgress = false;
        _this.search = '';
        return _this;
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
    HomeStepComponent.prototype.getPreviewSubtitle2 = function () {
        return this.stories.home.preview.subtitle2;
    };
    HomeStepComponent.prototype.getHomeAfterButton = function () {
        return this.stories.home.afterButtons;
    };
    HomeStepComponent.prototype.getCenterContactInfo = function () {
        return this.stories.home.footer.address.info;
    };
    HomeStepComponent.prototype.hasAddress = function () {
        return this.stories.home.footer.address !== undefined;
    };
    HomeStepComponent.prototype.getCenterName = function () {
        return this.stories.home.footer.address.center_name;
    };
    HomeStepComponent.prototype.getPreviewImageSrc = function () {
        return this.stories.home.preview.img;
    };
    HomeStepComponent.prototype.homeHasColumns = function () {
        return this.stories.home.columns instanceof Array;
    };
    HomeStepComponent.prototype.hasCredit = function () {
        return this.stories.home.footer.credit != undefined;
    };
    HomeStepComponent.prototype.showCredits = function () {
        return this.hasCredit() && this.isPreview();
    };
    HomeStepComponent.prototype.hasDescription = function () {
        return this.hasCredit() && this.stories.home.footer.credit.description != undefined;
    };
    HomeStepComponent.prototype.showDescription = function () {
        return this.hasDescription() && this.isPreview();
    };
    HomeStepComponent.prototype.showPreview = function () {
        this.windowService.homeViewPreview = true;
        this.clearBackgroundBlur();
    };
    HomeStepComponent.prototype.getStoriesKeys = function () {
        var _this = this;
        var keys = Object.keys(this.stories['stories']);
        if (this.search !== '') {
            keys = keys.filter(function (name) {
                return _this.getStoryTitle(name).indexOf(_this.search) > -1;
            });
        }
        return keys;
    };
    HomeStepComponent.prototype.getStoryTitle = function (story) {
        return this.stories['stories'][story].steps.cover.title;
    };
    HomeStepComponent.prototype.getStoryBackgroundSrc = function (story) {
        return this.stories['stories'][story].steps.cover.background.url;
    };
    HomeStepComponent.prototype.goToStory = function (story) {
        this.windowService.setBodyBgUrl(this.stories['stories'][story].steps.cover.background.url);
        this.scaling = story;
        this.scalingInProgress = true;
        this.goTo(story, 'cover');
    };
    HomeStepComponent.prototype.goToMap = function (story) {
        this.goTo(story, 'map');
    };
    HomeStepComponent.prototype.goTo = function (story, step) {
        this.unlockBackground();
        this.clearBackgroundBlur();
        this.clearBackgroundGradient();
        this.clearBackgroundFullScreen();
        this.windowService.setBodyBgUrl(this.getStoryBackgroundSrc(story));
        this.windowService.setCurrentStory(story);
        this.windowService.scrollToStep(step);
    };
    HomeStepComponent.prototype.showDescriptionImage = function () {
        return this.getWindowWidth() > 800 && this.getWindowHeight() > 750;
    };
    HomeStepComponent.prototype.hasAuthors = function (story) {
        return this.stories['stories'][story].steps.skip.contact_info.authors instanceof Array;
    };
    HomeStepComponent.prototype.getAuthors = function (story) {
        if (this.stories['stories'][story].steps.skip.contact_info.authors instanceof Array) {
            return this.stories['stories'][story].steps.skip.contact_info.authors.map(function (item) {
                return item.name;
            });
        }
        return [];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HomeStepComponent.prototype, "stories", void 0);
    HomeStepComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: '/templates/shared/steps/home/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, WindowService_1.WindowService])
    ], HomeStepComponent);
    return HomeStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.HomeStepComponent = HomeStepComponent;
//# sourceMappingURL=HomeStep.js.map