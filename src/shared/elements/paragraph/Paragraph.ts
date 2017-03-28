import {Component} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";

@Component({
    selector: 'paragraph',
    templateUrl: '/templates/shared/elements/paragraph/view.html',
})
export class ParagraphComponent extends BaseElementComponent {


    capitalized() :boolean{
        return this.item.capitalize != undefined && this.item.capitalize;
    }
}
