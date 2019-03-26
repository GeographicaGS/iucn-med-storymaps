import {Component, Input, Inject, ElementRef, AfterViewInit} from "@angular/core";
import {WindowService} from "../../../services/WindowService";

@Component({
    selector: 'base-element',
    templateUrl: '/templates/shared/elements/base-element/view.html',
})
export class BaseElementComponent implements AfterViewInit{
    @Input()
    item: any = {};

    constructor(@Inject(ElementRef) protected element: ElementRef,
                @Inject(WindowService) protected windowService: WindowService) {
    }

    hasInfo(): boolean {
        return this.item.info !== undefined
            && this.item.info.elements !== undefined
            && this.item.info.elements.length > 0
    }

    hasCredit(): boolean {
        return this.item.credit !== undefined;
    }

    showContent(): boolean {
        let offset = this.element.nativeElement.getBoundingClientRect();
        return !this.windowService.scrollingDown() || (this.windowService.getWindowHeight() * 0.9) > (offset.top);
    }

    ngAfterViewInit(){

    }
}
