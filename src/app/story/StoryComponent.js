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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WindowService_1 = require("../../services/WindowService");
var DataService_1 = require("../../services/DataService");
var router_1 = require("@angular/router");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var Subscription_1 = require("rxjs/Subscription");
var CoverStep_1 = require("../../shared/steps/cover/CoverStep");
var IntroStep_1 = require("../../shared/steps/intro/IntroStep");
var MapStep_1 = require("../../shared/steps/map/MapStep");
var ConclusionStep_1 = require("../../shared/steps/conclusion/ConclusionStep");
var SkipStep_1 = require("../../shared/steps/skip/SkipStep");
var StoryComponent = /** @class */ (function () {
    function StoryComponent(element, dataService, route, router, windowService) {
        this.element = element;
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.windowService = windowService;
        this.currentStory = null;
        this.currentStep = 'cover';
        this.steps = [];
        this.subscription = new Subscription_1.Subscription();
    }
    StoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.currentStory = _this.dataService.getStory(params.slug);
            if (!_this.currentStory) {
                _this.router.navigate(['/']);
            }
            else {
                _this.windowService.updateSocialMetaTags(_this.currentStory.steps.cover.title, _this.currentStory.steps.cover.subtitle, _this.currentStory.steps.cover.background.url, document.location.href);
                _this.currentStep = (_this.route.queryParams.value || { step: 'cover' })['step'];
                _this.steps = Object.keys(_this.currentStory['steps']).map(function (key) { return Object.assign(_this.currentStory['steps'][key], { type: key }); });
            }
        });
    };
    StoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onMenuClick(_this.currentStep);
        }, 500);
    };
    StoryComponent.prototype.onChangeScrollDown = function (down) {
        if (down === void 0) { down = false; }
        this.windowService.scrollDown = down;
    };
    StoryComponent.prototype.onScroll = function () {
        var _this = this;
        var keys = Object.keys(this.currentStory['steps']);
        var offset = document.documentElement.clientHeight * 0.3;
        var idx = keys.findIndex(function (key) {
            var el = _this.element.nativeElement.querySelector("#" + key);
            if (!el) {
                return false;
            }
            var top = el.getBoundingClientRect().top;
            var bottom = el.getBoundingClientRect().bottom;
            return _this.windowService.scrollingDown() && top > -20 && top < offset
                || !_this.windowService.scrollingDown() && bottom > 20 && bottom < offset;
        });
        if (idx > -1) {
            this.currentStep = keys[idx];
            this[this.currentStep].onScroll();
        }
    };
    StoryComponent.prototype.onMenuClick = function (step) {
        this.currentStep = step;
        if (this.currentStep === 'skip') {
            this.scrollbar.directiveRef.scrollToY(99999, 800);
        }
        else {
            this.scrollbar.directiveRef.scrollToElement('#' + this.currentStep, 0, 800);
        }
    };
    __decorate([
        core_1.ViewChild('scrollbar'),
        __metadata("design:type", ngx_perfect_scrollbar_1.PerfectScrollbarComponent)
    ], StoryComponent.prototype, "scrollbar", void 0);
    __decorate([
        core_1.ViewChild('cover'),
        __metadata("design:type", CoverStep_1.CoverStepComponent)
    ], StoryComponent.prototype, "cover", void 0);
    __decorate([
        core_1.ViewChild('intro'),
        __metadata("design:type", IntroStep_1.IntroStepComponent)
    ], StoryComponent.prototype, "intro", void 0);
    __decorate([
        core_1.ViewChild('map'),
        __metadata("design:type", MapStep_1.MapStepComponent)
    ], StoryComponent.prototype, "map", void 0);
    __decorate([
        core_1.ViewChild('conclusion'),
        __metadata("design:type", ConclusionStep_1.ConclusionStepComponent)
    ], StoryComponent.prototype, "conclusion", void 0);
    __decorate([
        core_1.ViewChild('skip'),
        __metadata("design:type", SkipStep_1.SkipStepComponent)
    ], StoryComponent.prototype, "skip", void 0);
    StoryComponent = __decorate([
        core_1.Component({
            selector: 'app-story',
            templateUrl: '/templates/routes/story/view.html'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            DataService_1.DataService,
            router_1.ActivatedRoute,
            router_1.Router,
            WindowService_1.WindowService])
    ], StoryComponent);
    return StoryComponent;
}());
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=StoryComponent.js.map