import { Component, Inject, Input, HostBinding, ElementRef } from '@angular/core';
import { BaseStepComponent } from '../base/BaseStep';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../../services/WindowService';

@Component({
  selector: 'cover',
  templateUrl: '/templates/shared/steps/cover/view.html',
})
export class CoverStepComponent extends BaseStepComponent {

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(DOCUMENT) protected document: any,
              protected windowService: WindowService) {
    super(element, document, windowService);
  }

  showTitle(): boolean {
    let offset = this.element.nativeElement.getBoundingClientRect();
    return (this.getWindowHeight() * 0.70) < (offset.bottom);
  }

  showButton(): boolean {
    let offset = this.element.nativeElement.getBoundingClientRect();
    return offset.bottom > 200;
  }

}
