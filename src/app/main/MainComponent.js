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
var WindowService_1 = require("../../services/WindowService");
var DataService_1 = require("../../services/DataService");
var Subscription_1 = require("rxjs/Subscription");
var MainComponent = /** @class */ (function () {
    function MainComponent(element, storyService, windowService) {
        this.element = element;
        this.storyService = storyService;
        this.windowService = windowService;
        this.subscription = new Subscription_1.Subscription();
        this.backgroundSrc = '';
        this.bodyClass = 'full-screen';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backgroundSrc = 'url(' + this.windowService.getBodyBgUrl() + ')';
        this.subscription.add(this.windowService.bodyBgUrl.subscribe(function (src) {
            _this.backgroundSrc = src;
        }));
        this.subscription.add(this.windowService.bodyClass.subscribe(function (_class) {
            _this.bodyClass = _class;
        }));
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.HostBinding('style.background-image'),
        core_1.Input(),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "backgroundSrc", void 0);
    __decorate([
        core_1.HostBinding('class'),
        core_1.Input(),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "bodyClass", void 0);
    MainComponent = __decorate([
        core_1.Component({
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(DataService_1.DataService)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            DataService_1.DataService,
            WindowService_1.WindowService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=MainComponent.js.map