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
var StoryComponent = /** @class */ (function () {
    function StoryComponent(element, dataService, route, router, windowService) {
        this.element = element;
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.windowService = windowService;
        this.currentStory = null;
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
                _this.windowService.setCurrentStep('cover');
                _this.steps = Object.keys(_this.currentStory['steps']).map(function (key) { return Object.assign(_this.currentStory['steps'][key], { type: key }); });
            }
        });
    };
    StoryComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.ViewChild('scrollbar'),
        __metadata("design:type", ngx_perfect_scrollbar_1.PerfectScrollbarComponent)
    ], StoryComponent.prototype, "scrollbar", void 0);
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