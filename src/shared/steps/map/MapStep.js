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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var BaseStep_1 = require("../base/BaseStep");
var mapbox_gl_1 = require('mapbox-gl');
var MapService_1 = require("../../../services/MapService");
var platform_browser_1 = require("@angular/platform-browser");
var WindowService_1 = require("../../../services/WindowService");
var MapStepComponent = (function (_super) {
    __extends(MapStepComponent, _super);
    function MapStepComponent(elem, document, windowService, mapService) {
        _super.call(this, elem, document, windowService);
        this.document = document;
        this.windowService = windowService;
        this.mapService = mapService;
    }
    MapStepComponent.prototype.onResize = function (event) {
        _super.prototype.onResize.call(this, event);
        this.mapService.map.resize();
    };
    MapStepComponent.prototype.lockMap = function () {
        this.windowService.setBodyBgClass('locked');
        if (this.mapService.map instanceof mapbox_gl_1.Map) {
            this.mapService.map.resize();
            this.mapService.map.scrollZoom.enable();
        }
    };
    MapStepComponent.prototype.unlockMap = function () {
        if (this.mapService.map instanceof mapbox_gl_1.Map) {
            this.mapService.map.scrollZoom.disable();
        }
    };
    MapStepComponent.prototype.lockView = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        var locked = this.windowService.scrollingDown() && offset.top < 100 && offset.top > -20
            || !this.windowService.isScrollingActive() && offset.top == 0;
        if (locked) {
            this.lockMap();
        }
        else {
            this.unlockMap();
        }
        return locked;
    };
    MapStepComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.mapService.map = new mapbox_gl_1.Map({
            trackResize: true,
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 5,
            center: [6.328125, 40.78054143186033]
        });
        this.mapService.map.scrollZoom.disable();
    };
    MapStepComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: '/templates/shared/steps/map/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __param(2, core_1.Inject(WindowService_1.WindowService)),
        __param(3, core_1.Inject(MapService_1.MapService)), 
        __metadata('design:paramtypes', [core_1.ElementRef, Object, WindowService_1.WindowService, MapService_1.MapService])
    ], MapStepComponent);
    return MapStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.MapStepComponent = MapStepComponent;
//# sourceMappingURL=MapStep.js.map