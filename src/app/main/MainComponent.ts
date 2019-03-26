import { Component, ElementRef, Inject, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';
import { WindowService } from '../../services/WindowService';
import { DataService } from '../../services/DataService';
import { Subscription } from 'rxjs/Subscription';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class MainComponent implements OnInit, OnDestroy {


  subscription: Subscription = new Subscription();

  @HostBinding('style.background-image')
  @Input()
  backgroundSrc = '';

  @HostBinding('class')
  @Input()
  bodyClass = 'full-screen';

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(DataService) private storyService: DataService,
              protected meta: Meta,
              protected windowService: WindowService) {
    meta.addTag({property: 'og:title', content: ''});
    meta.addTag({property: 'og:description', content: ''});
  }

  ngOnInit(): void {
    this.backgroundSrc = 'url(' + this.windowService.getBodyBgUrl() + ')';
    this.subscription.add(
      this.windowService.bodyBgUrl.subscribe((src) => {
        this.backgroundSrc = src;
      })
    );
    this.subscription.add(
      this.windowService.bodyClass.subscribe((_class) => {
        this.bodyClass = _class;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
