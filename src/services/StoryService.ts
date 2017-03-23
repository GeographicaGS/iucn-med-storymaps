import {Injectable, Inject} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StoryService {
    constructor(@Inject(Http) private _http: Http) {

    }

    get(type: string): any {
        return this._http.get('mockupData/' + type+'.json').map(response => response.json());
    }
}
