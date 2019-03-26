import { Component, ElementRef, Inject } from '@angular/core';
import { BaseStepComponent } from '../base/BaseStep';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../../services/WindowService';

@Component({
  selector: 'intro',
  templateUrl: '/templates/shared/steps/intro/view.html',
})
export class IntroStepComponent extends BaseStepComponent {
  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(DOCUMENT) protected document: any,
              protected windowService: WindowService) {
    super(element, document, windowService);
  }

  showContent(): boolean {
    let offset = this.element.nativeElement.getBoundingClientRect();
    return (this.getWindowHeight() * 0.8) > (offset.top);
  }
}

