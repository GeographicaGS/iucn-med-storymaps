import {Component, Inject, Input} from "@angular/core";

@Component({
    selector: 'base-step',
    templateUrl: '/shared/steps/base-step/view.html',
})
export class BaseStepComponent {
    @Input()
    step: any;

    constructor(@Inject(Window) private window: Window) {
    }
}
