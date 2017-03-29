import {Component, ElementRef, Inject, OnInit, HostBinding, HostListener} from "@angular/core";
import {WindowService} from "../../services/WindowService";
import {StoryService} from "../../services/StoryService";

@Component({
    selector: 'body',
    templateUrl: '/templates/routes/home/view.html'
})
export class MainComponent implements OnInit {

    stories: any = {};
    currentStory: string = '';

    @HostBinding("style.background-image")
    backgroundSrc: string = '';

    @HostBinding("class")
    bodyClass: string = '';

    @HostListener('window:scroll', [])
    onScroll() {
        this.windowService.onScroll();
    }

    constructor(@Inject(ElementRef) protected element: ElementRef,
                @Inject(StoryService) private storyService: StoryService,
                @Inject(WindowService) protected windowService: WindowService) {

        this.backgroundSrc = 'url(' + this.windowService.getBodyBgUrl() + ')';
        this.windowService.getBodyBgUrlObservable().subscribe((src) => {
            this.backgroundSrc = 'url(' + src + ')';
        });

        this.bodyClass = this.windowService.getBodyClass();
        this.windowService.getBodyClassObservable().subscribe((_class) => {
            console.log(_class);
            this.bodyClass = _class;
        });

        this.currentStory = this.windowService.getCurrentStory();

        this.storyService.getObservable().subscribe(stories => {
            this.stories = stories;
        });
        this.windowService.getCurrentStoryObservable().subscribe(currentStory => {
            this.currentStory = currentStory;
        });
    }


    ngOnInit() {
        //Todo:: Remove when are implemented the home
        if (this.currentStory == ''){
            this.windowService.setCurrentStory('butterflies');
        }
    }

    isStoryLoaded(): boolean {
        return this.stories[this.currentStory] != undefined
    }

    getStepsKeys() {
        return this.stories[this.currentStory] != undefined ? Object.keys(this.stories[this.currentStory]['steps']) : []
    }

    getStep(step: string): any {
        return this.stories[this.currentStory]['steps'][step]
    }


}
