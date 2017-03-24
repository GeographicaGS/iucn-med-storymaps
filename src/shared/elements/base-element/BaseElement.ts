import {Component, Inject, Input} from "@angular/core";

@Component({
    selector: 'base-element',
    templateUrl: '/shared/elements/base-element/view.html',
})
export class BaseElementComponent {
    @Input()
    item: any = {};
}
