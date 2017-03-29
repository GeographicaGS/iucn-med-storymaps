import {Component} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'intro',
    templateUrl: '/templates/shared/steps/intro/view.html',
})
export class IntroStepComponent extends BaseStepComponent {

    showContent(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return (this.getWindowHeight() * 0.8) > (offset.top);
    }
    onScroll(){
        super.onScroll();
    }
}

