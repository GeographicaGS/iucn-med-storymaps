import {Component} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";

@Component({
    selector: 'image',
    templateUrl: '/templates/shared/elements/image/view.html',
})
export class ImageComponent extends BaseElementComponent {
    getBackgroundSrc(): string {
        return this.item.url != undefined ? this.item.url : 'none';
    }

}
