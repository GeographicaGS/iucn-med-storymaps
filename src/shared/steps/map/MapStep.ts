import {Component, Inject, Renderer, ElementRef, AfterViewInit, HostBinding, Input} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";
import {Map, Popup} from 'mapbox-gl';
import {MapService} from "../../../services/MapService";
import {DOCUMENT} from "@angular/platform-browser";
import {WindowService} from "../../../services/WindowService";

@Component({
    selector: 'map',
    templateUrl: '/templates/shared/steps/map/view.html',
})
export class MapStepComponent extends BaseStepComponent {
    @Input() activeLayer: any = false;
    @Input() zoom: any = 4.5;
    @Input() center: any = [15.0, 38.0];
    @Input() popup: any = false;
    @Input() currentLegend: string = '';

    constructor(@Inject(ElementRef)  elem: ElementRef,
                @Inject(DOCUMENT) protected document: any,
                protected windowService: WindowService,
                @Inject(MapService) private mapService: MapService) {
        super(elem, document, windowService);
    }

    onResize(event: any) {
        super.onResize(event);
        this.mapService.map.resize();
    }

    lockMap() {
        this.windowService.setBodyBgClass('locked');
        if (this.mapService.map instanceof Map) {
            this.mapService.map.resize();
            this.mapService.map.scrollZoom.enable();
        }
    }

    unlockMap() {
        if (this.mapService.map instanceof Map) {
            this.mapService.map.scrollZoom.disable();
        }
    }

    lockView() {
        let offset = this.element.nativeElement.getBoundingClientRect();
        let locked = this.windowService.scrollingDown() && offset.top < 100 && offset.top > -20
            || !this.windowService.isScrollingActive() && offset.top == 0;
        if (locked) {
            this.windowService.setBodyBgUrl('');
            this.windowService.setBodyBgClass('locked');
            this.lockMap();
        } else {
            this.windowService.setBodyBgClass('');
            this.unlockMap();
        }

        return locked;
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.mapService.map = new Map({
            trackResize: false,
            container: 'map',
            style: 'mapbox://styles/cayetanobv/cj0do9yow001q2smnpjsp8wtq',
            zoom: this.zoom,
            center: this.center
        });
        this.mapService.map.scrollZoom.disable();

        this.setActiveLayer();
    }

    setActiveLayer() {
        for (let layer in this.step.info) {
            if (this.step.info[layer].collapsed === false) {
                this.activeLayer = this.step.info[layer];
                break;
            }
        }
        this.mapService.map.on('load', () => {
            this.updateLayers(this.activeLayer);
        });
    }

    toggleActiveLayer() {
        if (!this.activeLayer.layer.subLayers.length || !this.mapService.map) return;

        let activePopup: any = {};

        if (this.popup) this.popup.remove();

        for (let sublayer of this.activeLayer.layer.subLayers) {
            let visibility = this.mapService.map.getLayoutProperty(sublayer, 'visibility');
            if (visibility === 'visible') {
                this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'none');
            } else {
                this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'visible');
            }
        }

        this.mapService.map.on('click', (e: any) => {
            let features = this.mapService.map.queryRenderedFeatures(e.point, {layers: this.activeLayer.layer.subLayers });
            if (!features.length) return;

            let properties = <any>{};
            properties = features[0].properties;
            
            if (this.popup) this.popup.remove();
            this.popup = new Popup()
                .setLngLat(e.lngLat)
                .setHTML(properties.count)
                .addTo(this.mapService.map);
        });
    }

    updateLayers(info: any = {}) {
        if (this.activeLayer) {
            this.toggleActiveLayer();
        }
        this.activeLayer = info;
        this.currentLegend = this.activeLayer.legend;

        this.toggleActiveLayer();
    }

    zoomIn() {
        let currentZoom = this.mapService.map.getZoom();
        let currentCenter = this.mapService.map.getCenter();

        this.flyTo(currentCenter, currentZoom + 1);
    }

    zoomOut() {
        let currentZoom = this.mapService.map.getZoom();
        let currentCenter = this.mapService.map.getCenter();

        this.flyTo(currentCenter, currentZoom - 1);
    }

    flyTo(center: any = this.center, zoom: any = this.zoom) {
        if (!this.mapService.map) return;

        this.mapService.map.flyTo({
            center: center,
            zoom: zoom,
            speed: 0.6
        });
    }

    getShpFile(info: any = {}) {
        let anchor = document.createElement('a');
        anchor.href = info.shp;
        anchor.target = '_blank';
        anchor.download = info.shp;
        anchor.click();
    }

}
