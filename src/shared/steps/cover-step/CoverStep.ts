import {Component, Inject, Input, HostBinding} from "@angular/core";
import {BaseStepComponent} from "../base-step/BaseStep";

@Component({
    selector: 'cover-step',
    templateUrl: '/shared/steps/cover-step/view.html',
})
export class CoverStepComponent extends BaseStepComponent{
    @HostBinding('body') private body : any;

    ngOnChanges(){
        document.body.style.backgroundImage = this.step.background.url;
        console.log(document.getElementsByTagName('body')[0]);
        // this.body.style.background_image = this.step.background.url;
    }
}
