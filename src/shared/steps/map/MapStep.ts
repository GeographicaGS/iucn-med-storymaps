import {Component, Inject, Renderer, ElementRef, AfterViewInit, HostBinding, Input} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";
import {Map} from 'mapbox-gl';
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
            trackResize: true,
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
    }

    toggleActiveLayer() {
        if (!this.activeLayer.layer.subLayers.length) return;

        for (let sublayer of this.activeLayer.layer.subLayers) {
            let visibility = this.mapService.map.getLayoutProperty(sublayer, 'visibility');
            if (visibility === 'visible') {
                this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'none');
            } else {
                this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'visible');
            }
        }
    }

    updateLayers(info: any = {}) {
        if (this.activeLayer) {
            this.toggleActiveLayer();
        }
        this.activeLayer = info;
        this.toggleActiveLayer();
    }

    resetBbox() {
        this.mapService.map.flyTo({
            center: this.center,
            zoom: this.zoom,
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
