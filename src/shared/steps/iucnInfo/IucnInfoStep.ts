import {Component, Inject, Input, HostBinding} from "@angular/core";
import {BaseStepComponent} from "../base/BaseStep";

@Component({
    selector: 'iucnInfo',
    templateUrl: '/templates/shared/steps/iucnInfo/view.html',
})
export class IucnInfoStepComponent extends BaseStepComponent {
	@Input() stories: any = {};

    showTitle(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return (this.getWindowHeight() * 0.70) < (offset.bottom);
    }

    showButton(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return offset.bottom > 200;
    }

    goHome() {
    	this.stories.iucnInfo.show = false;
    }

    showStoryList() {
    	this.stories.iucnInfo.show = false;
        this.windowService.scrollTo(0, 10);
        setTimeout(() => {
            this.windowService.homeViewPreview = false;
        	this.addBackgroundBlur();
        }, 10);
    }

    addBackgroundBlur() {
        let _class = this.windowService.getBodyClass();
        this.windowService.setBodyBgClass(_class + ' blur');
    }

    hasContactPersons(): boolean {
        return this.step.contact_info != undefined && this.step.contact_info.persons != undefined && this.step.contact_info.persons.length > 0
    }

    getContactPerson(): any {
        if (this.hasContactPersons()) {
            return this.step.contact_info.persons;
        }
        return [];
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

}
