"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var mapboxgl = require("mapbox-gl");
var MapService_1 = require("../../../services/MapService");
var platform_browser_1 = require("@angular/platform-browser");
var WindowService_1 = require("../../../services/WindowService");
var MapStepComponent = /** @class */ (function (_super) {
    __extends(MapStepComponent, _super);
    function MapStepComponent(elem, document, windowService, mapService) {
        var _this = _super.call(this, elem, document, windowService) || this;
        _this.elem = elem;
        _this.document = document;
        _this.windowService = windowService;
        _this.mapService = mapService;
        _this.activeLayer = false;
        _this.zoom = 4.5;
        _this.center = [15.0, 38.0];
        _this.popup = false;
        _this.mapService.changes.subscribe(function () {
            _this.initMap();
        });
        return _this;
    }
    MapStepComponent.prototype.onResize = function (event) {
        _super.prototype.onResize.call(this, event);
        this.mapService.map.resize();
    };
    MapStepComponent.prototype.lockMap = function () {
        this.windowService.setBodyBgClass('locked');
        if (this.mapService.map instanceof mapboxgl.Map) {
            this.mapService.map.resize();
            this.mapService.map.scrollZoom.enable();
        }
    };
    MapStepComponent.prototype.unlockMap = function () {
        if (this.mapService.map instanceof mapboxgl.Map) {
            this.mapService.map.scrollZoom.disable();
        }
    };
    MapStepComponent.prototype.lockView = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        var locked = this.windowService.scrollingDown() && offset.top < 100 && offset.top > -20
            || !this.windowService.isScrollingActive() && offset.top === 0;
        if (locked) {
            this.windowService.setBodyBgUrl('none');
            this.windowService.setBodyBgClass('locked');
            this.lockMap();
        }
        else {
            this.unlockMap();
        }
        return locked;
    };
    MapStepComponent.prototype.ngAfterViewInit = function () {
        this.initMap();
    };
    MapStepComponent.prototype.initMap = function () {
        var _this = this;
        this.zoom = 4.5;
        this.center = [15.0, 38.0];
        this.mapService.map = new mapboxgl.Map({
            trackResize: false,
            container: this.elem.nativeElement.querySelector('#map'),
            style: this.step.mapStyle || 'mapbox://styles/cayetanobv/cj0do9yow001q2smnpjsp8wtq',
            zoom: this.zoom,
            center: this.center
        });
        this.mapService.map.scrollZoom.disable();
        this.mapService.map.on('load', function () {
            _this.updateLayers(_this.step.info.find(function (item) { return !item.collapsed; }));
        });
    };
    MapStepComponent.prototype.toggleActiveLayer = function (currentLayer) {
        var _this = this;
        if (!currentLayer.layer.subLayers.length || !this.mapService.map)
            return;
        if (this.popup)
            this.popup.remove();
        this.step.info.forEach(function (panel) {
            panel.layer.hidden = true;
            panel.layer.subLayers.forEach(function (sublayer) {
                _this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'none');
            });
        });
        currentLayer.layer.subLayers.forEach(function (sublayer) {
            _this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'visible');
        });
        currentLayer.layer.hidden = false;
        this.activeLayer = currentLayer;
        this.mapService.map.on('click', function (e) {
            var features = _this.mapService.map.queryRenderedFeatures(e.point, { layers: _this.activeLayer.layer.subLayers });
            if (!features.length)
                return;
            var properties = features[0].properties;
            var content = properties.note || properties.count || properties.N_COUNT;
            if (_this.popup)
                _this.popup.remove();
            if (content) {
                _this.popup = new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(content)
                    .addTo(_this.mapService.map);
            }
        });
    };
    MapStepComponent.prototype.updateLayers = function (info) {
        if (info === void 0) { info = {}; }
        this.toggleActiveLayer(info);
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
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };
    MapStepComponent.prototype.getCurrentLegend = function () {
        return this.activeLayer.legend;
    };
    MapStepComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: '/templates/shared/steps/map/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __param(3, core_1.Inject(MapService_1.MapService)),
        __metadata("design:paramtypes", [core_1.ElementRef, Object, WindowService_1.WindowService,
            MapService_1.MapService])
    ], MapStepComponent);
    return MapStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.MapStepComponent = MapStepComponent;
//# sourceMappingURL=MapStep.js.map