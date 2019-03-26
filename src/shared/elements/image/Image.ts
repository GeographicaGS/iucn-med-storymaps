import { Component, ElementRef, Inject } from '@angular/core';
import {BaseElementComponent} from "../base-element/BaseElement";
import { WindowService } from '../../../services/WindowService';

@Component({
    selector: 'image',
    templateUrl: '/templates/shared/elements/image/view.html',
})
export class ImageComponent extends BaseElementComponent {


  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(WindowService) protected windowService: WindowService) {
      super(element, windowService)
  }

  getBackgroundSrc(): string {
        return this.item.url !== undefined ? this.item.url : 'none';
    }

    hasIco() {
        return this.item.credit.ico === undefined || this.item.credit.ico;
    }

}
