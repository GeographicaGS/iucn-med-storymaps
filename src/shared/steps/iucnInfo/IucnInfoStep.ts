import { Component, Inject, Input, HostBinding, AfterViewInit, ElementRef } from '@angular/core';
import {BaseStepComponent} from "../base/BaseStep";
import { WindowService } from '../../../services/WindowService';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'iucnInfo',
    templateUrl: '/templates/shared/steps/iucnInfo/view.html',
})
export class IucnInfoStepComponent extends BaseStepComponent {

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(DOCUMENT) protected document: any,
              protected windowService: WindowService) {
    super(element, document, windowService);
  }

  @Input() stories: any = {};

    showTitle(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return (this.getWindowHeight() * 0.70) < (offset.bottom);
    }

    showButton(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return offset.bottom > 200;
    }

    goHome() {
        this.windowService.goHome();
    }

    aboutHasBlocks(): boolean {
        return this.step.blocks != undefined && this.step.blocks instanceof Array;
    }

    hasDescription(): boolean {
        return this.stories.iucnInfo.description != undefined
    }

    hasCredit(): boolean {
        return this.stories.home.footer.credit != undefined
    }

    showCredits(): boolean {
        return this.hasCredit();
    }

    getCenterContactInfo(): string {
        return this.stories.home.footer.address.info;
    }

    hasAddress(): boolean {
        return this.stories.home.footer.address !== undefined;
    }

    getCenterName(): string {
        return this.stories.home.footer.address.center_name;
    }

    showStoryList() {
        this.windowService.homeViewPreview = false;
        this.windowService.goHome();
    }
}
