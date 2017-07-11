import {Component, Inject, Input, HostBinding, AfterViewInit} from "@angular/core";
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
        this.windowService.goHome();
    }

    showStoryList() {
        this.windowService.homeViewPreview = false;
        this.windowService.goHome();
    }

    hasContactPersons(): boolean {
        return this.step.contact_info != undefined && this.step.contact_info.persons != undefined && this.step.contact_info.persons.length > 0
    }

    aboutHasColumns(): boolean {
        return this.step.columns != undefined && this.step.columns.length > 0
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

    hasDescription(): boolean {
        return this.stories.iucnInfo.description != undefined
    }


}
