import {Component, Input, HostBinding} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";

@Component({
    selector: 'info',
    templateUrl: '/templates/shared/elements/info/view.html',
})
export class InfoComponent extends BaseElementComponent {
    @HostBinding('class.collapsed')
    @Input() collapsed: boolean = false;

    toggleVisibility() {
        this.collapsed = !this.collapsed;
    }

    hasCredits(){
        return this.item.credit != undefined;
    }
}
