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
    search: string = '';

    ngAfterViewInit() {
        // setting a timeout so that it works on safari .... 
        setTimeout(() => {
            this.checkBackground();
        }, 100);
    }

    checkBackground() {
        let _class = this.step.background != undefined && this.step.background.class != undefined ? this.step.background.class : '';
        let _url = this.step.background != undefined && this.step.background.url != undefined ? this.step.background.url : '';
        this.windowService.setBodyBgClass(_class);
        this.windowService.setBodyBgUrl('url( ' + _url + ')');
        if (!this.windowService.homeViewPreview && !this.windowService.aboutView) {
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
        this.windowService.homeViewPreview = false;
        this.windowService.goHome();
    }

    showMoreInfo() {
        this.windowService.clearBodyUrl();
        this.unlockBackground();
        this.clearBackgroundBlur();
        this.clearBackgroundGradient();
        this.windowService.aboutView = true;
    }

    isPreview(): boolean {
        return this.windowService.homeViewPreview;
    }

    isScaling(story: string): boolean {
        return this.scaling == story;
    }

    hasSomeScaling(): boolean {
        return this.scaling != '';
    }

    getPreviewDescription(): string {
        return this.stories.home.preview.description
    }

    getPreviewSubtitle(): string {
        return this.stories.home.preview.subtitle
    }

    getPreviewSubtitle2(): string {
        return this.stories.home.preview.subtitle2
    }

    getHomeAfterButton(): string {
        return this.stories.home.afterButtons
    }

    getCenterContactInfo(): string {
        return this.stories.home.footer.address.info;
    }

    hasAddress(): boolean {
        return this.stories.home.footer.address !== undefined;
    }

    getCenterName(): string {
        return this.stories.home.footer.address.center_name;
    }

    getPreviewImageSrc(): string {
        return this.stories.home.preview.img
    }

    homeHasColumns() {
        return this.stories.home.columns instanceof Array;
    }

    hasCredit(): boolean {
        return this.stories.home.footer.credit != undefined
    }

    showCredits(): boolean {
        return this.hasCredit() && this.isPreview();
    }

    hasDescription(): boolean {
        return this.hasCredit() && this.stories.home.footer.credit.description != undefined
    }

    showDescription(): boolean {
        return this.hasDescription() && this.isPreview();
    }

    showPreview(): void {
        this.windowService.homeViewPreview = true;
        this.clearBackgroundBlur();
    }

    getStoriesKeys(): string[] {
        let keys = Object.keys(this.stories['stories']);
        if (this.search !== '') {
            keys = keys.filter((name: string) => {
                return this.getStoryTitle(name).indexOf(this.search) > -1;
            })
        }
        return keys;
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

    showDescriptionImage(): boolean {
        return this.getWindowWidth() > 800 && this.getWindowHeight() > 750;
    }

    hasAuthors(story: string) {
        return this.stories['stories'][story].steps.skip.contact_info.authors instanceof Array;
    }

    getAuthors(story: string) {
        let authors = [];
        if (this.stories['stories'][story].steps.skip.contact_info.authors instanceof Array) {
            authors = this.stories['stories'][story].steps.skip.contact_info.authors.map((item: any) => {
                return item.name;
            })
        }
        return authors;
    }
}
