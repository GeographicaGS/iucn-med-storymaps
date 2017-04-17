import {Component, Input, HostBinding, Output, EventEmitter} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";

@Component({
    selector: 'info',
    templateUrl: '/templates/shared/elements/info/view.html',
})
export class InfoComponent extends BaseElementComponent {
    @HostBinding('class.collapsed')
    @Input() collapsed: boolean = true;

    @Output()
    manageLayers: EventEmitter<any> = new EventEmitter();

    toggleVisibility() {
        this.collapsed = !this.collapsed;
    }

    hasCredits() {
        return this.item.credit != undefined;
    }

    ngAfterViewInit() {
        if (this.item.collapsed != undefined) {
            this.collapsed = this.item.collapsed;
        }
        super.ngAfterViewInit();
    }

    toggleLayer(info: any = {}) {
        if (info.collapsed === false) return;

        let item: any = {};
        for (item of this.item) {
            item.collapsed = true;
        }

        info.collapsed = !info.collapsed;

        this.manageLayers.emit(info);
    }
}
