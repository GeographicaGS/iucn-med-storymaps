import {Component, Inject} from "@angular/core";
import {BaseStepComponent} from "../base-step/BaseStep";

@Component({
    selector: 'skip-step',
    templateUrl: '/shared/steps/skip-step/view.html',
})
export class SkipStepComponent extends BaseStepComponent{
}
