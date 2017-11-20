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
    }

    isItemActive(item: string): boolean {
        return item == this.windowService.getCurrentStep();
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
        this.windowService.homeViewPreview = true;
        this.windowService.goHome();
    }
    goStoriesList(){
        this.windowService.homeViewPreview = false;
        this.windowService.goHome();
    }
}
