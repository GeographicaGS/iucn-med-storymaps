import {Component} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";

@Component({
    selector: 'paragraph',
    templateUrl: '/shared/elements/paragraph/view.html',
})
export class ParagraphComponent extends BaseElementComponent {


    capitalized() :boolean{
        console.log(this.item);
        return this.item.capitalize != undefined && this.item.capitalize;
    }
}
