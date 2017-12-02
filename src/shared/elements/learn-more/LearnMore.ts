import {Component, ElementRef, Inject} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";
import {WindowService} from "../../../services/WindowService";

@Component({
    selector: 'el-learn-more',
    templateUrl: '/templates/shared/elements/learn-more/view.html',
})
export class LearnMoreComponent extends BaseElementComponent {

    constructor(@Inject(ElementRef) protected element: ElementRef,
                @Inject(WindowService) protected windowService: WindowService) {
        super(element, windowService);
    }

    showContent(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return (this.windowService.getWindowHeight() * 0.65) > (offset.top);
    }

    hasImage(link: any) {
        return link.img !== undefined;
    }

    hasHref(link: any) {
        return link.href !== undefined;
    }
}
