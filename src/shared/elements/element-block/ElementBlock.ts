import {Component, Input} from "@angular/core";

@Component({
    selector: 'element-block',
    templateUrl: '/templates/shared/elements/element-block/view.html',
})
export class ElementBlockComponent {
    @Input()
    elements: any = {};
}
