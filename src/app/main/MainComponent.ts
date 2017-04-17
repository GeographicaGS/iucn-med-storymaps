import {Component, ElementRef, Inject, HostBinding, HostListener, Input} from "@angular/core";
import {WindowService} from "../../services/WindowService";
import {StoryService} from "../../services/StoryService";

@Component({
    selector: 'body',
    templateUrl: '/templates/routes/home/view.html'
})
export class MainComponent {

    stories: any = {};
    currentStory: string = '';

    @HostBinding("style.background-image")
    @Input()
    backgroundSrc: string = '';

    @HostBinding("class")
    @Input()
    bodyClass: string = 'full-screen';

    @HostListener('window:scroll', [])
    onScroll() {
        this.windowService.onScroll();
    }

    constructor(@Inject(ElementRef) protected element: ElementRef,
                @Inject(StoryService) private storyService: StoryService,
                protected windowService: WindowService) {

        this.backgroundSrc = 'url(' + this.windowService.getBodyBgUrl() + ')';
        this.windowService.getBodyBgUrlObservable().subscribe((src) => {
            this.backgroundSrc = 'url(' + src + ')';
        });

        this.windowService.getBodyClassObservable().subscribe((_class) => {
            this.bodyClass = _class;
        });

        this.currentStory = this.windowService.getCurrentStory();

        this.storyService.getObservable().subscribe(stories => {
            this.stories = stories;
        });
        this.windowService.getCurrentStoryObservable().subscribe((currentStory) => {
            this.currentStory = currentStory;
        });
    }


    isStoryLoaded(): boolean {
        return this.stories['stories'] != undefined && this.stories['stories'][this.currentStory] != undefined
    }

    areStoriesLoaded(): boolean {
        return this.stories['home'] != undefined
    }

    getStepsKeys() {
        return this.stories['stories'] != undefined && this.stories['stories'][this.currentStory] != undefined ? Object.keys(this.stories['stories'][this.currentStory]['steps']) : []
    }

    getStep(step: string): any {
        return this.stories['stories'][this.currentStory]['steps'][step]
    }


}
