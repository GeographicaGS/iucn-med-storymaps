import {Component, Inject} from "@angular/core";
import {WindowService} from "../../services/WindowService";
import {StoryService} from "../../services/StoryService";

@Component({
    selector: 'menu',
    templateUrl: '/templates/shared/menu/view.html',
})
export class MenuComponent {
    currentStep: string = 'cover';
    stories: any = {};
    currentStory: any = {};

    constructor(@Inject(WindowService) private windowService: WindowService,
                @Inject(StoryService) private storyService: StoryService) {
        this.currentStory = this.windowService.getCurrentStory();
        this.currentStep = this.windowService.getCurrentStep();
        this.stories = this.storyService.getStories();
        this.windowService.getCurrentStepObservable().subscribe((nextStep) => {
            this.currentStep = nextStep;
        });
        this.windowService.getCurrentStoryObservable().subscribe((currentStory) => {
            this.currentStory = currentStory;
        });
        this.storyService.getObservable().subscribe((stories) => {
            this.stories = stories;
        });
    }

    isItemActive(item: string): boolean {
        return item == this.currentStep;
    }

    getStepsKeys(){
        return this.stories[this.currentStory] != undefined ? Object.keys(this.stories[this.currentStory]['steps']) : [];
    }
    getStepName(step : string){
        return this.stories[this.currentStory]['steps'][step]['name'];
    }
    scrollTo(step: string) {
        this.windowService.scrollToStep(step);
    }
}
