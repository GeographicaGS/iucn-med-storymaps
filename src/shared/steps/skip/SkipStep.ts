import {Component} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'skip-step',
    templateUrl: '/templates/shared/steps/skip/view.html',
})
export class SkipStepComponent extends BaseStepComponent {

    onScroll() {
        let offset = this.element.nativeElement.getBoundingClientRect();
        if (this.windowService.getBodyClass() !== 'locked' && this.windowService.getScrollTop() >= offset.top - 20 && this.windowService.getScrollTop() < offset.bottom + 25) {
            this.windowService.setBodyBgUrl(this.step.background.url);
            //Todo:: Detect why the offset when background is locked is top - 20px
            this.windowService.setBodyBgClass(this.step.background.class);
        }
        super.onScroll();
    }

    showImage() {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.5)) > offset.top;
    }

    showTitle() {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.6)) > offset.top;
    }

    showButton() {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.7)) > offset.top
    }
}
