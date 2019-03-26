import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: Http) {
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
