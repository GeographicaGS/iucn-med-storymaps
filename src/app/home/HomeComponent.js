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
var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, document, windowService) {
        this.dataService = dataService;
        this.document = document;
        this.windowService = windowService;
        this.stories = {};
        this.home = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.home = this.dataService.getHomeData();
        this.windowService.setBodyBgUrl("url(" + this.home.background.url + ")");
        this.windowService.setBodyBgClass(this.home.background.class);
        this.windowService.updateSocialMetaTags(this.home.preview.title, this.home.preview.description, this.home.background.src, document.location.href);
    };
    HomeComponent.prototype.getPreviewTitle = function () {
        return this.home.preview.title;
    };
    HomeComponent.prototype.getPreviewDescription = function () {
        return this.home.preview.description;
    };
    HomeComponent.prototype.getPreviewSubtitle = function () {
        return this.home.preview.subtitle;
    };
    HomeComponent.prototype.getPreviewSubtitle2 = function () {
        return this.home.preview.subtitle2;
    };
    HomeComponent.prototype.getHomeAfterButton = function () {
        return this.home.afterButtons;
    };
    HomeComponent.prototype.getCenterContactInfo = function () {
        return this.home.footer.address.info;
    };
    HomeComponent.prototype.hasAddress = function () {
        return this.home.footer.address !== undefined;
    };
    HomeComponent.prototype.getCenterName = function () {
        return this.home.footer.address.center_name;
    };
    HomeComponent.prototype.homeHasColumns = function () {
        return this.home.columns instanceof Array;
    };
    HomeComponent.prototype.hasCredits = function () {
        return this.home.footer.credit !== undefined;
    };
    HomeComponent.prototype.hasDescription = function () {
        return this.hasCredits() && this.home.footer.credit.description !== undefined;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "stories", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: '/templates/routes/home/view.html',
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [DataService_1.DataService, Object, WindowService_1.WindowService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=HomeComponent.js.map