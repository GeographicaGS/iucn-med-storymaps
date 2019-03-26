import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observer, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: Http) {
  }

  getObservable(): Observable<any> {
    return Observable.of([]);
    // return this.storiesObservable;
  }

  initData() {
    return new Promise<boolean>((resolve, reject) => {
      if (this.data.getValue() !== null) {
        return resolve(true);
      } else {
        this.http.get('data/stories.json').toPromise().then((response: Response) => {
          this.data.next(response.json());
          resolve(true);
        });
      }
    });
  }

  getHomeData() {
    return this.data.getValue().home || {};
  }

  getIUCNInfoData() {
    return this.data.getValue().iucnInfo || {};

  }

  getStory(slug = '') {
    return this.data.getValue().stories[slug] || {};
  }

  getStories() {
    return this.data.getValue().stories || {};
  }
}
