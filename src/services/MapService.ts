import {Injectable} from "@angular/core";
import * as mapboxgl from 'mapbox-gl';
import {Map} from 'mapbox-gl';

@Injectable()
export class MapService {
    map: Map;
    baseMaps: any;

    constructor() {
        (mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2F5ZXRhbm9idiIsImEiOiJEMWUzLVpRIn0.PD0U3GevSGwVUPrRCT360Q'

        this.baseMaps = [
            { name: 'Street', id: 'street' },
            { name: 'Bright', id: 'bright' },
            { name: 'Light', id: 'light' },
            { name: 'Satellite', id: 'satellite' }
        ];

    }
}
