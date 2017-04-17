import {Component, Inject, Input} from "@angular/core";
import {WindowService} from "../../services/WindowService";
import {StoryService} from "../../services/StoryService";

@Component({
    selector: 'menu',
    templateUrl: '/templates/shared/menu/view.html',
})
export class MenuComponent {
    currentStep: string = 'cover';
    @Input()
    stories: any = {};
    @Input()
    currentStory: any = {};

    constructor(private windowService: WindowService,
                @Inject(StoryService) private storyService: StoryService) {
        this.currentStep = this.windowService.getCurrentStep();
        this.windowService.getCurrentStepObservable().subscribe((nextStep) => {
            this.currentStep = nextStep;
        });
    }

    isItemActive(item: string): boolean {
        return item == this.currentStep;
    }

    getStepsKeys(){
        return this.stories['stories'][this.currentStory] != undefined ? Object.keys(this.stories['stories'][this.currentStory]['steps']) : [];
    }
    getStepName(step : string){
        return this.stories['stories'][this.currentStory]['steps'][step]['name'];
    }
    scrollTo(step: string) {
        if (step.toLowerCase() == 'skip'){
            this.windowService.scrollTo(9999);
        }else{
            this.windowService.scrollToStep(step);
        }
    }
    goHome(){
        this.windowService.goHome();
    }
}
