import { Component, ElementRef, Inject } from '@angular/core';
import { BaseStepComponent } from '../base/BaseStep';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../../services/WindowService';

@Component({
  selector: 'conclusion',
  templateUrl: '/templates/shared/steps/conclusion/view.html',
})
export class ConclusionStepComponent extends BaseStepComponent {

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(DOCUMENT) protected document: any,
              protected windowService: WindowService) {
    super(element, document, windowService);
  }

  hasIco(): boolean {
    return this.step.ico !== undefined;
  }

  getIco(): string {
    return this.step.ico || '';
  }
}
