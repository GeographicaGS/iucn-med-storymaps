import {Component, ElementRef, Inject, OnInit, HostBinding, HostListener} from "@angular/core";
import {WindowService} from "../../services/WindowService";
import {StoryService} from "../../services/StoryService";

@Component({
    selector: 'body',
    templateUrl: '/templates/routes/home/view.html'
})
export class MainComponent implements OnInit {

    stories: any = {};
    storyName: string = '';

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
            this.bodyClass = _class;
        });
        this.storyName = 'butterflies';
    }


    ngOnInit() {
        this.storyService.getObservable().subscribe(stories => {
            this.stories = stories;
        });

    }

    isStoryLoaded(): boolean {
        return this.stories[this.storyName] != undefined
    }

    getStepsKeys() {
        return this.stories[this.storyName] != undefined ? Object.keys(this.stories[this.storyName]['steps']) : []
    }

    getStep(step: string): any {
        return this.stories[this.storyName]['steps'][step]
    }


}
