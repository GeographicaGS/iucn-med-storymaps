import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class WindowService {
  scrollInterval: any;
  scrollDown = true;

  bodyBgUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');
  bodyClass: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(@Inject(DOCUMENT) private document: any, protected meta: Meta) {
    this.initSocialMetaTags();
  }

  scrollingDown(): boolean {
    return this.scrollDown;
  }

  getWindowHeight() {
    return this.document.documentElement.clientHeight;
  }

  getWindowWidth() {
    return this.document.documentElement.clientWidth;
  }


  getBodyBgUrl(): string {
    return this.bodyBgUrl.getValue();
  }

  setBodyBgUrl(url: string) {
    this.bodyBgUrl.next(url);
  }

  setBodyBgClass(_class: string) {
    this.bodyClass.next(_class);
  }


  isScrollingActive(): boolean {
    return this.scrollInterval !== undefined;
  }

  resetBackground() {
    this.setBodyBgClass('');
    this.setBodyBgUrl('');
  }

  initSocialMetaTags() {
    this.meta.addTag({property: 'og:title', content: ''});
    this.meta.addTag({property: 'og:type', content: 'website'});
    this.meta.addTag({property: 'og:image', content: ''});
    this.meta.addTag({property: 'og:url', content: ''});
    this.meta.addTag({property: 'og:description', content: ''});
    this.meta.addTag({property: 'twitter:card', content: 'summary'});
    this.meta.addTag({property: 'twitter:title', content: ''});
    this.meta.addTag({property: 'twitter:description', content: ''});
    this.meta.addTag({property: 'twitter:image', content: ''});

  }

  updateSocialMetaTags(title, description, image, url) {
    this.meta.updateTag({property: 'og:title', content: title});
    this.meta.updateTag({property: 'og:image', content: image});
    this.meta.updateTag({property: 'og:url', content: url});
    this.meta.updateTag({property: 'og:description', content: description});
    this.meta.updateTag({property: 'twitter:card', content: 'summary'});
    this.meta.updateTag({property: 'twitter:title', content: title});
    this.meta.updateTag({property: 'twitter:description', content: description});
    this.meta.updateTag({property: 'twitter:image', content: image});

  }

}
