import { EventEmitter, Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {
  map: Map;
  changes: EventEmitter<any> = new EventEmitter();

  constructor() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2F5ZXRhbm9idiIsImEiOiJEMWUzLVpRIn0.PD0U3GevSGwVUPrRCT360Q';
  }

  reload() {
    this.changes.emit();
  }
}
