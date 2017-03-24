import {Injectable, Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observer, Observable} from "rxjs";

@Injectable()
export class StoryService {
    stories: any = {};
    storiesObserver: Observer<any>;
    storiesObservable: Observable<any>;


    constructor(@Inject(Http) private _http: Http) {
        this.storiesObservable = new Observable((observer) => {
            this.storiesObserver = observer;
        });
        this._http.get('data/stories.json').subscribe((response: Response) => {
            this.stories = response.json();
            this.storiesObserver.next(this.stories);
        });
    }

    getObservable(): Observable<any> {
        return this.storiesObservable;
    }

    getStories(): any {
        return this.stories;
    }
}
