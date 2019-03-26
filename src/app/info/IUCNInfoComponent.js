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
var IUCNInfoComponent = /** @class */ (function () {
    function IUCNInfoComponent(element, document, router, dataService, windowService) {
        this.element = element;
        this.document = document;
        this.router = router;
        this.dataService = dataService;
        this.windowService = windowService;
        this.home = {};
        this.info = {};
    }
    IUCNInfoComponent.prototype.ngOnInit = function () {
        this.home = this.dataService.getHomeData();
        this.info = this.dataService.getIUCNInfoData();
        this.windowService.scrollTo(1, 0);
        this.windowService.resetBackground();
    };
    IUCNInfoComponent.prototype.aboutHasBlocks = function () {
        return Array.isArray(this.info.blocks);
    };
    IUCNInfoComponent.prototype.hasCredit = function () {
        return this.home.footer.credit !== undefined;
    };
    IUCNInfoComponent.prototype.getCenterContactInfo = function () {
        return this.home.footer.address.info;
    };
    IUCNInfoComponent.prototype.hasAddress = function () {
        return this.home.footer.address !== undefined;
    };
    IUCNInfoComponent.prototype.getCenterName = function () {
        return this.home.footer.address.center_name;
    };
    IUCNInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-iucn-info',
            templateUrl: '/templates/routes/info/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, router_1.Router,
            DataService_1.DataService,
            WindowService_1.WindowService])
    ], IUCNInfoComponent);
    return IUCNInfoComponent;
}());
exports.IUCNInfoComponent = IUCNInfoComponent;
//# sourceMappingURL=IUCNInfoComponent.js.map