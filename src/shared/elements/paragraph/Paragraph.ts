import { Component, ElementRef, Inject } from '@angular/core';
import { BaseElementComponent } from '../base-element/BaseElement';
import { WindowService } from '../../../services/WindowService';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'paragraph',
  templateUrl: '/templates/shared/elements/paragraph/view.html',
})
export class ParagraphComponent extends BaseElementComponent {


  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(WindowService) protected windowService: WindowService,
              private sanitized: DomSanitizer) {
    super(element, windowService);
  }

  capitalized(): boolean {
    return this.item.capitalize !== undefined && this.item.capitalize;
  }

  highlight(): boolean {
    return this.item.highlight !== undefined && this.item.highlight;
  }

  bold(): boolean {
    return this.item.bold !== undefined && this.item.bold;
  }

  semibold(): boolean {
    return this.item.semibold !== undefined && this.item.semibold;
  }

  safeValue(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
