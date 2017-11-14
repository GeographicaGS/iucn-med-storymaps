import {Component} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'skip',
    templateUrl: '/templates/shared/steps/skip/view.html',
})
export class SkipStepComponent extends BaseStepComponent {


    showImage() {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.5)) > offset.top;
    }

    showTitle() {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.6)) > offset.top;
    }

    showButton() {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.7)) > offset.top
    }

    goToNextStory() {
        this.windowService.setCurrentStory(this.step.next_story.link);
        this.windowService.currentStep = 'cover';
        this.windowService.scrollTo(1, 0);
    }

    hasAuthors(): boolean {
        return this.step.contact_info != undefined && this.step.contact_info.authors != undefined && this.step.contact_info.authors.length > 0
    }

    getAuthors(): any {
        if (this.hasAuthors()) {
            return this.step.contact_info.authors;
        }
        return [];
    }

    getAuthorsLink(): string {
        if (this.hasAuthors()) {
            return this.step.contact_info.author_link;
        }
        return '';
    }

    hasContactInfo(): boolean {
        return this.step.contact_info != undefined;
    }

    hasAddress(): boolean {
        return this.step.contact_info != undefined && this.step.contact_info.address != undefined;
    }

    getCenterName(): string {
        if (this.hasAddress()) {
            return this.step.contact_info.address.center_name;
        }
        return '';

    }

    getCenterContactInfo(): string {
        if (this.hasAddress()) {
            return this.step.contact_info.address.info;
        }
        return '';

    }

    hasCredit() : boolean{
        return this.step.credit != undefined;
    }
}
