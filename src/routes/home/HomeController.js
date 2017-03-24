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
var core_1 = require('@angular/core');
var ng2_scrollspy_1 = require("ng2-scrollspy");
var router_1 = require("@angular/router");
var StoryService_1 = require("../../services/StoryService");
var HomeController = (function () {
    function HomeController(scrollSpyService, route, storyService) {
        var _this = this;
        this.scrollSpyService = scrollSpyService;
        this.route = route;
        this.storyService = storyService;
        this.stories = {};
        this.storyName = '';
        this.storyService.getObservable().subscribe(function (stories) {
            _this.stories = stories;
        });
        this.route.params.subscribe(function (params) {
            _this.storyName = params['type'];
        });
    }
    HomeController.prototype.ngAfterViewInit = function () {
        this.scrollSpyService.getObservable('window').subscribe(function (e) {
            console.log('ScrollSpy::window: ', e);
        });
    };
    HomeController.prototype.isStoryLoaded = function () {
        return this.stories[this.storyName] != undefined;
    };
    HomeController.prototype.getSteps = function () {
        return this.stories[this.storyName] != undefined ? Object.keys(this.stories[this.storyName]['steps']) : [];
    };
    HomeController.prototype.getStep = function (step) {
        return this.stories[this.storyName]['steps'][step];
    };
    HomeController = __decorate([
        core_1.Component({
            templateUrl: './routes/home/view.html'
        }),
        __param(0, core_1.Inject(ng2_scrollspy_1.ScrollSpyService)),
        __param(1, core_1.Inject(router_1.ActivatedRoute)),
        __param(2, core_1.Inject(StoryService_1.StoryService)), 
        __metadata('design:paramtypes', [ng2_scrollspy_1.ScrollSpyService, router_1.ActivatedRoute, StoryService_1.StoryService])
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map