import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WindowService {
  scrollInterval: any;
  scrollDown = true;

  bodyBgUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');
  bodyClass: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(@Inject(DOCUMENT) private document: any) {
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
}
