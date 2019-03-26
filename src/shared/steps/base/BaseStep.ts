import {
    Component, Input, ElementRef, Inject, HostListener, AfterViewInit,
} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";
import {WindowService} from "../../../services/WindowService";
import {MapService} from "../../../services/MapService";

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
                protected windowService: WindowService) {


    }

    @HostListener('window:scroll', [])
    onScroll() {
        this.checkStep();
        this.checkBackground();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {

    }

    checkBackground() {
        let offset = this.element.nativeElement.getBoundingClientRect();
        if (
            this.windowService.scrollingDown() && (offset.top) <= this.getWindowHeight() ||
            !this.windowService.scrollingDown() && (offset.bottom) < (this.getWindowHeight() + offset.height)
        ) {
            let _class = this.step.background !== undefined && this.step.background.class !== undefined ? this.step.background.class : '';
            let _url = this.step.background !== undefined && this.step.background.url !== undefined ? this.step.background.url : '';
            this.windowService.setBodyBgClass(_class);
            this.windowService.setBodyBgUrl('url(' + _url + ')');
        }
    }

    checkStep() {
        let offset = this.getWindowHeight() * 0.3;
        let top = this.element.nativeElement.getBoundingClientRect().top;
        let bottom = this.element.nativeElement.getBoundingClientRect().bottom;
        if (
            this.windowService.scrollingDown() && top > -20 && top < offset
            || !this.windowService.scrollingDown() && bottom > 20 && bottom < offset
        ) {
            this.windowService.setCurrentStep(this.element.nativeElement.tagName.toLowerCase());
        }
    }

    ngAfterViewInit() {
        this.windowService.addStep(this.element);
        this.onScroll();
    }

    getWindowHeight() {
        return document.documentElement.clientHeight;
    }

    getWindowWidth() {
        return document.documentElement.clientWidth - 72;
    }

    hasTitle(): boolean {
        return this.step.title !== undefined;
    }

    hasInfo(): boolean {
        return this.step.info !== undefined;
    }

    getBackgroundColor(): string {
        return this.step.backgroundColor !== undefined ? this.step.backgroundColor : 'inherit';
    }

    hasBackgroundCredit(): boolean {
        return this.step.background.credit !== undefined;
    }

    goNextStep() {
        this.windowService.scrollToNextStep(this.element);
    }

}
