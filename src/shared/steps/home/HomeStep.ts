import {Component, Input} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'home',
    templateUrl: '/templates/shared/steps/home/view.html',
})
export class HomeStepComponent extends BaseStepComponent {
    @Input() stories: any = {};

    scaling: string = '';
    scalingInProgress: boolean = false;

    ngAfterViewInit() {
        this.checkBackground();
    }

    checkBackground() {
        let _class = this.step.background != undefined && this.step.background.class != undefined ? this.step.background.class : '';
        let _url = this.step.background != undefined && this.step.background.url != undefined ? this.step.background.url : '';
        this.windowService.setBodyBgClass(_class);
        this.windowService.setBodyBgUrl(_url);
        if (!this.windowService.homeViewPreview) {
            this.addBackgroundBlur();
        }
    }

    addBackgroundBlur() {
        let _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class + ' blur');
    }

    clearBackgroundBlur() {
        let _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('blur', ''));
    }
    clearBackgroundFullScreen() {
        let _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('full-screen', ''));
    }
    clearBackgroundGradient() {
        let _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('gradient', ''));
    }
    unlockBackground() {
        let _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class.replace('locked', ''));
    }

    getPreviewTitle(): string {
        return this.stories.home.preview.title
    }

    hasPreviewTitle(): boolean {
        return this.stories.home.preview.title != '';
    }

    getListTitle(): string {
        return this.stories.home.list.title
    }

    showStoryList() {
        this.windowService.scrollTo(0, 10);
        this.addBackgroundBlur();
        setTimeout(() => {
            this.windowService.homeViewPreview = false;
        }, 10);
    }

    showMoreInfo() {
        //Todo:: See where it must go this link
    }

    isPreview(): boolean {
        return this.windowService.homeViewPreview;
    }

    isScaling(story: string): boolean {
        return this.scaling == story;
    }

    getPreviewDescription(): string {
        return this.stories.home.preview.description
    }

    getPreviewSubtitle(): string {
        return this.stories.home.preview.subtitle
    }

    getPreviewImageSrc(): string {
        return this.stories.home.preview.img
    }

    hasCredit(): boolean {
        return this.stories.home.background.credit != undefined
    }

    showCredits(): boolean {
        return this.hasCredit() && this.isPreview();
    }

    hasDescription(): boolean {
        return this.hasCredit() && this.stories.home.background.credit.description != undefined
    }

    showDescription(): boolean {
        return this.hasDescription() && this.isPreview();
    }

    showPreview(): void {
        this.windowService.homeViewPreview = true;
        this.clearBackgroundBlur();
    }

    getStoriesKeys(): string[] {
        return Object.keys(this.stories['stories']);
    }

    getStoryTitle(story: string): string {
        return this.stories['stories'][story].steps.cover.title;
    }

    getStoryBackgroundSrc(story: string) {
        return this.stories['stories'][story].steps.cover.background.url;
    }

    goToStory(story: string) {
        this.scaling = story;
        this.scalingInProgress = true;
        this.goTo(story, 'cover');
    }

    goToMap(story: string) {
        this.goTo(story, 'map');
    }

    goTo(story: string, step: string) {
        setTimeout(() => {
            this.unlockBackground();
            this.clearBackgroundBlur();
            this.clearBackgroundGradient();
            this.clearBackgroundFullScreen();
            this.windowService.setBodyBgUrl(this.getStoryBackgroundSrc(story));
            this.windowService.setCurrentStory(story);
            
            setTimeout(() => {
                this.windowService.scrollToStep(step);
                this.scalingInProgress = false;
            }, 25);
        }, 1000);
    }

}
