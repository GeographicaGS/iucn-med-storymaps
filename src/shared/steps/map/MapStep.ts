import {Component, Inject, Renderer, ElementRef, AfterViewInit, HostBinding} from "@angular/core";
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
            style: 'mapbox://styles/mapbox/light-v9',
            zoom: 5,
            center: [6.328125, 40.78054143186033]
        });
        this.mapService.map.scrollZoom.disable();
    }


}
