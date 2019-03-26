import { Component, Inject, Renderer, ElementRef, AfterViewInit, HostBinding } from '@angular/core';
import { BaseStepComponent } from '../base/BaseStep';
// import {Map, Popup} from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../../../services/MapService';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../../services/WindowService';

@Component({
  selector: 'map',
  templateUrl: '/templates/shared/steps/map/view.html',
})
export class MapStepComponent extends BaseStepComponent {
  activeLayer: any = false;
  zoom: any = 4.5;
  center: any = [15.0, 38.0];
  popup: any = false;
  currentLegend: string = '';

  constructor(@Inject(ElementRef)  elem: ElementRef,
              @Inject(DOCUMENT) protected document: any,
              protected windowService: WindowService,
              @Inject(MapService) private mapService: MapService) {
    super(elem, document, windowService);
    this.mapService.changes.subscribe(() => {
      this.initMap();
    });
  }

  onResize(event: any) {
    super.onResize(event);
    this.mapService.map.resize();
  }

  lockMap() {
    this.windowService.setBodyBgClass('locked');
    if (this.mapService.map instanceof mapboxgl.Map) {
      this.mapService.map.resize();
      this.mapService.map.scrollZoom.enable();
    }
  }

  unlockMap() {
    if (this.mapService.map instanceof mapboxgl.Map) {
      this.mapService.map.scrollZoom.disable();
    }
  }

  lockView() {
    let offset = this.element.nativeElement.getBoundingClientRect();
    let locked = this.windowService.scrollingDown() && offset.top < 100 && offset.top > -20
      || !this.windowService.isScrollingActive() && offset.top === 0;
    if (locked) {
      this.windowService.setBodyBgUrl('none');
      this.windowService.setBodyBgClass('locked');
      this.lockMap();
    } else {
      this.unlockMap();
    }

    return locked;
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.initMap();
  }

  initMap() {
    this.zoom = 4.5;
    this.center = [15.0, 38.0];

    this.mapService.map = new mapboxgl.Map({
      trackResize: false,
      container: 'map',
      style: this.step.mapStyle || 'mapbox://styles/cayetanobv/cj0do9yow001q2smnpjsp8wtq',
      zoom: this.zoom,
      center: this.center
    });
    this.mapService.map.scrollZoom.disable();
    this.mapService.map.on('load', () => {
      this.updateLayers(this.step.info.find((item: any) => !item.collapsed));
    });
  }

  toggleActiveLayer(currentLayer: any) {
    if (!currentLayer.layer.subLayers.length || !this.mapService.map) return;

    if (this.popup)
      this.popup.remove();

    this.step.info.forEach((panel:any) => {
      panel.layer.hidden = true;
      panel.layer.subLayers.forEach((sublayer: string) => {
        this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'none');
      });
    });

    currentLayer.layer.subLayers.forEach((sublayer: string) => {
      this.mapService.map.setLayoutProperty(sublayer, 'visibility', 'visible');
    });
    currentLayer.layer.hidden = false;
    this.activeLayer = currentLayer;
    this.mapService.map.on('click', (e: any) => {
      let features = this.mapService.map.queryRenderedFeatures(e.point, {layers: this.activeLayer.layer.subLayers});
      if (!features.length) return;

      const properties = <any>features[0].properties;
      const content = properties.note || properties.count || properties.N_COUNT;

      if (this.popup) this.popup.remove();
      if (content) {
        this.popup = new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(content)
          .addTo(this.mapService.map);
      }

    });
  }


  updateLayers(info: any = {}) {
    this.toggleActiveLayer(info);
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
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  getCurrentLegend() {
    return this.activeLayer.legend;
  }

}
