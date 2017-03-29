import {Component} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'skip',
    templateUrl: '/templates/shared/steps/skip/view.html',
})
export class SkipStepComponent extends BaseStepComponent {


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
