import { Component, ElementRef, Inject } from '@angular/core';
import { BaseElementComponent } from '../base-element/BaseElement';
import { WindowService } from '../../../services/WindowService';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'el-slideshow',
  templateUrl: '/templates/shared/elements/slideshow/view.html',
})
export class SlideshowComponent extends BaseElementComponent {

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(WindowService) protected windowService: WindowService) {
    super(element, windowService);
  }

  getImageSources(): IImage[] {
    return this.item.images;
  }

  getHeight(): string {
      return (this.item.height || 525) + 'px';
  }

  isFullWidth(): boolean {
      return !!this.item.fullWidth;
  }

}
