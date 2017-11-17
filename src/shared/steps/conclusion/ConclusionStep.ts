import {Component} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'conclusion',
    templateUrl: '/templates/shared/steps/conclusion/view.html',
})
export class ConclusionStepComponent extends BaseStepComponent {

    hasIco(): boolean {
        return this.step.ico !== undefined;
    }

    getIco(): string {
        return this.step.ico || '';
    }
}
