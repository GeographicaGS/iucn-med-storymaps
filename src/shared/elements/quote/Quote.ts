import {Component} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";

@Component({
    selector: 'el-quote',
    templateUrl: '/templates/shared/elements/quote/view.html',
})
export class QuoteComponent extends BaseElementComponent {
    showContent(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return (this.windowService.getWindowHeight() * 0.65) > (offset.top);
    }
}
