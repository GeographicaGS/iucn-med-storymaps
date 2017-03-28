import {Component, Input, ElementRef, Inject, HostListener, Renderer, AfterViewInit} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";
import {WindowService} from "../../../services/WindowService";

@Component({
    selector: 'base-step',
    templateUrl: '/templates/shared/steps/base/view.html',
})
export class BaseStepComponent implements AfterViewInit {
    @Input()
    step: any;
    @Input()
    name: any;

    constructor(@Inject(ElementRef) protected element: ElementRef,
                @Inject(DOCUMENT) protected document: any,
                @Inject(WindowService) protected windowService: WindowService) {


    }

    @HostListener('window:scroll', [])
    onScroll() {

    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {

    }
    ngAfterViewInit() {
        let offset = this.element.nativeElement.getBoundingClientRect();
        this.windowService.addStep(this.name, offset.top, offset.bottom);
        this.onScroll();
    }

    checkEffects() {
    }

    getWindowHeight() {
        return document.documentElement.clientHeight;
    }

    getWindowWidth() {
        return document.documentElement.clientWidth - 72;
    }

    hasTitle(): boolean {
        return this.step.title != undefined;
    }

    hasInfo(): boolean {
        return this.step.info != undefined;
    }

    getBackgroundColor(): string {
        return this.step.backgroundColor != undefined ? this.step.backgroundColor : 'inherit';
    }

    goNextStep() {
        this.windowService.scrollToNextStep(this.name);
    }

}
