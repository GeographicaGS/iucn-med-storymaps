import {Component, Input} from "@angular/core";

@Component({
    selector: 'element-block',
    templateUrl: '/shared/elements/element-block/view.html',
})
export class ElementBlockComponent {
    @Input()
    elements: any = {};
}
