import {Component, AfterViewInit, Inject} from '@angular/core';
import {ScrollSpyService} from "ng2-scrollspy";
import {ActivatedRoute} from "@angular/router";
import {StoryService} from "../../services/StoryService";

@Component({
    templateUrl: './routes/home/view.html'
})
export class HomeController implements AfterViewInit {
    stories: any = {}
    storyName: string = '';

    constructor(@Inject(ScrollSpyService) private scrollSpyService: ScrollSpyService,
                @Inject(ActivatedRoute) private route: ActivatedRoute,
                @Inject(StoryService) private storyService: StoryService) {

        this.storyService.getObservable().subscribe(stories => {
            this.stories = stories;
        });

        this.route.params.subscribe((params) => {
            this.storyName = params['type'];
        })
    }

    ngAfterViewInit() {
        this.scrollSpyService.getObservable('window').subscribe((e: any) => {
            console.log('ScrollSpy::window: ', e);
        });
    }

    isStoryLoaded(): boolean {
        return this.stories[this.storyName] != undefined
    }

    getSteps() {
        return this.stories[this.storyName] != undefined ? Object.keys(this.stories[this.storyName]['steps']) : []
    }

    getStep(step: string): any {
        return this.stories[this.storyName]['steps'][step]
    }
}
