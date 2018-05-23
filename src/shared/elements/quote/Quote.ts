import { Component, ElementRef, Inject } from '@angular/core';
import { BaseElementComponent } from '../base-element/BaseElement';
import { WindowService } from '../../../services/WindowService';

@Component({
  selector: 'el-quote',
  templateUrl: '/templates/shared/elements/quote/view.html',
})
export class QuoteComponent extends BaseElementComponent {

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(WindowService) protected windowService: WindowService) {
    super(element, windowService)
  }

  showContent(): boolean {
    let offset = this.element.nativeElement.getBoundingClientRect();
    return (this.windowService.getWindowHeight() * 0.65) > (offset.top);
  }
}
