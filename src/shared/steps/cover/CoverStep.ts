import {Component, Inject, Input, HostBinding} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'cover',
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

}
