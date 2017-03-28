import {Component, Inject, Input, HostBinding} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'cover-step',
    templateUrl: '/templates/shared/steps/cover/view.html',
})
export class CoverStepComponent extends BaseStepComponent {

    showTitle(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return (this.getWindowHeight() * 0.70) < (offset.bottom);
    }

    showButton(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return offset.bottom > 200;
    }

    hasBackgroundCredit(): boolean {
        return this.step.background.credit != undefined;
    }

    onScroll() {
        let offset = this.element.nativeElement.getBoundingClientRect();
        if (this.windowService.getScrollTop() >= offset.top - 100 && this.windowService.getScrollTop() < offset.bottom + 25) {
            this.windowService.setBodyBgUrl(this.step.background.url);
            this.windowService.setBodyBgClass(this.step.background.class);
        }
        super.onScroll();

    }
}
