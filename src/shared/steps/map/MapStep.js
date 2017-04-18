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
        this.activeLayer = false;
        this.zoom = 4.5;
        this.center = [15.0, 38.0];
        this.popup = false;
        this.currentLegend = '';
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
            this.windowService.setBodyBgUrl('');
            this.windowService.setBodyBgClass('locked');
            this.lockMap();
        }
        else {
            this.windowService.setBodyBgClass('');
            this.unlockMap();
        }
        return locked;
    };
    MapStepComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.mapService.map = new mapbox_gl_1.Map({
            trackResize: false,
            container: 'map',
            style: 'mapbox://styles/cayetanobv/cj0do9yow001q2smnpjsp8wtq',
            zoom: this.zoom,
            center: this.center
        });
        this.mapService.map.scrollZoom.disable();
        this.setActiveLayer();
    };
    MapStepComponent.prototype.setActiveLayer = function () {
        var _this = this;
        for (var layer in this.step.info) {
            if (this.step.info[layer].collapsed === false) {
                this.activeLayer = this.step.info[layer];
                break;
            }
        }
        this.mapService.map.on('load', function () {
            _this.updateLayers(_this.activeLayer);
        });
    };
    MapStepComponent.prototype.toggleActiveLayer = function () {
        var _this = this;
        if (!this.activeLayer.layer.subLayers.length || !this.mapService.map)
            return;
        var activePopup = {};
        if (this.popup)
            this.popup.remove();
        for (var _i = 0, _a = this.activeLayer.layer.subLayers; _i < _a.length; _i++) {
            var sublayer = _a[_i];
            var visibility = this.mapService.map.getLayoutProperty(sublayer, 'visibility');
            if (visibility === 'visible') {
                this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'none');
            }
            else {
                this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'visible');
            }
        }
        this.mapService.map.on('click', function (e) {
            var features = _this.mapService.map.queryRenderedFeatures(e.point, { layers: _this.activeLayer.layer.subLayers });
            if (!features.length)
                return;
            var properties = {};
            properties = features[0].properties;
            var count = properties.count;
            if (_this.popup)
                _this.popup.remove();
            if (!properties.count && properties.N_COUNT) {
                count = properties.N_COUNT;
            }
            _this.popup = new mapbox_gl_1.Popup()
                .setLngLat(e.lngLat)
                .setHTML(count)
                .addTo(_this.mapService.map);
        });
    };
    MapStepComponent.prototype.updateLayers = function (info) {
        if (info === void 0) { info = {}; }
        if (this.activeLayer) {
            this.toggleActiveLayer();
        }
        this.activeLayer = info;
        this.currentLegend = this.activeLayer.legend;
        this.toggleActiveLayer();
    };
    MapStepComponent.prototype.zoomIn = function () {
        var currentZoom = this.mapService.map.getZoom();
        var currentCenter = this.mapService.map.getCenter();
        this.flyTo(currentCenter, currentZoom + 1);
    };
    MapStepComponent.prototype.zoomOut = function () {
        var currentZoom = this.mapService.map.getZoom();
        var currentCenter = this.mapService.map.getCenter();
        this.flyTo(currentCenter, currentZoom - 1);
    };
    MapStepComponent.prototype.flyTo = function (center, zoom) {
        if (center === void 0) { center = this.center; }
        if (zoom === void 0) { zoom = this.zoom; }
        if (!this.mapService.map)
            return;
        this.mapService.map.flyTo({
            center: center,
            zoom: zoom,
            speed: 0.6
        });
    };
    MapStepComponent.prototype.getShpFile = function (info) {
        if (info === void 0) { info = {}; }
        var anchor = document.createElement('a');
        anchor.href = info.shp;
        anchor.target = '_blank';
        anchor.download = info.shp;
        anchor.click();
    };
    MapStepComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: '/templates/shared/steps/map/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __param(3, core_1.Inject(MapService_1.MapService)), 
        __metadata('design:paramtypes', [core_1.ElementRef, Object, WindowService_1.WindowService, MapService_1.MapService])
    ], MapStepComponent);
    return MapStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.MapStepComponent = MapStepComponent;
//# sourceMappingURL=MapStep.js.map