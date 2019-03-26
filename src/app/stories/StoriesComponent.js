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
var WindowService_1 = require("../../services/WindowService");
var DataService_1 = require("../../services/DataService");
var router_1 = require("@angular/router");
var StoriesComponent = /** @class */ (function () {
    function StoriesComponent(element, document, router, dataService, windowService) {
        this.element = element;
        this.document = document;
        this.router = router;
        this.dataService = dataService;
        this.windowService = windowService;
        this.stories = {};
        this.scaling = '';
        this.scalingInProgress = false;
        this.search = '';
    }
    StoriesComponent.prototype.ngOnInit = function () {
        this.stories = this.dataService.getStories();
        var _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class + " blur");
        this.windowService.scrollTo(1, 0);
    };
    StoriesComponent.prototype.isScaling = function (story) {
        return this.scaling === story;
    };
    StoriesComponent.prototype.hasSomeScaling = function () {
        return this.scaling !== '';
    };
    StoriesComponent.prototype.getStoriesKeys = function () {
        var _this = this;
        var keys = Object.keys(this.stories || {});
        if (this.search !== '') {
            keys = keys.filter(function (name) {
                return _this.getStoryTitle(name).indexOf(_this.search) > -1;
            });
        }
        return keys;
    };
    StoriesComponent.prototype.getStoryTitle = function (story) {
        return this.stories[story].steps.cover.title;
    };
    StoriesComponent.prototype.getStoryBackgroundSrc = function (story) {
        return this.stories[story].steps.cover.background.url;
    };
    StoriesComponent.prototype.goToStory = function (story) {
        this.windowService.setBodyBgUrl(this.stories[story].steps.cover.background.url);
        this.scaling = story;
        this.scalingInProgress = true;
        this.goTo(story, 'cover');
    };
    StoriesComponent.prototype.goToMap = function (story) {
        this.goTo(story, 'map');
    };
    StoriesComponent.prototype.goTo = function (story, step) {
        var _this = this;
        this.router.navigate(['/story', story]).then(function () {
            setTimeout(function () {
                _this.windowService.scrollToStep(step);
            }, 150);
        });
    };
    StoriesComponent.prototype.hasAuthors = function (story) {
        return this.stories[story].steps.skip.contact_info.authors instanceof Array;
    };
    StoriesComponent.prototype.getAuthors = function (story) {
        if (this.stories[story].steps.skip.contact_info.authors instanceof Array) {
            return this.stories[story].steps.skip.contact_info.authors.map(function (item) {
                return item.name;
            });
        }
        return [];
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StoriesComponent.prototype, "stories", void 0);
    StoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-stories',
            templateUrl: '/templates/routes/stories/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, router_1.Router,
            DataService_1.DataService,
            WindowService_1.WindowService])
    ], StoriesComponent);
    return StoriesComponent;
}());
exports.StoriesComponent = StoriesComponent;
//# sourceMappingURL=StoriesComponent.js.map