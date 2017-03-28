import {Component, Inject} from "@angular/core";
import {WindowService} from "../../services/WindowService";

@Component({
    selector: 'menu',
    templateUrl: '/templates/shared/menu/view.html',
})
export class MenuComponent {
    currentStep: string = 'cover';

    constructor(@Inject(WindowService) private windowService: WindowService) {
        this.windowService.getCurrentStepObservable().subscribe((nextStep) => {
            this.currentStep = nextStep;
        });
    }

    isItemActive(item: string): boolean {
        return item == this.currentStep;
    }

    scrollTo(step: string) {
        this.windowService.scrollToStep(step);
    }
}
