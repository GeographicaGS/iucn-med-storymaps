import {Component, Inject, Renderer, ElementRef, AfterViewInit} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";
import {Map} from 'mapbox-gl';
import {MapService} from "../../../services/MapService";
import {DOCUMENT} from "@angular/platform-browser";
import {WindowService} from "../../../services/WindowService";

@Component({
    selector: 'map-step',
    templateUrl: '/templates/shared/steps/map/view.html',
})
export class MapStepComponent extends BaseStepComponent {

    constructor(@Inject(ElementRef)  elem: ElementRef,
                @Inject(DOCUMENT) protected document: any,
                @Inject(WindowService) protected windowService: WindowService,
                @Inject(MapService) private mapService: MapService) {
        super(elem, document, windowService);
    }

    onScroll() {
        if (this.lockView()) {
            this.windowService.setBodyBgClass('locked');
            this.mapService.map.resize();
            this.mapService.map.scrollZoom.enable();
        } else if (this.windowService.getBodyClass() == 'locked') {
            this.windowService.setBodyBgClass('');
            this.mapService.map.scrollZoom.disable();
        }
    }

    onResize(event: any) {
        super.onResize(event);
        this.mapService.map.resize();
        if (this.windowService.getBodyClass() == 'locked') {
            this.windowService.scrollToStep('map');
        }

    }

    lockView() {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return this.windowService.scrollingDown() && offset.top < 100 && offset.top > -20;
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
