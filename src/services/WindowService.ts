import {Injectable, Inject, HostListener, ElementRef} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";
import {Observable, Observer} from "rxjs";

@Injectable()
export class WindowService {
    scrollInterval: any;
    stepsMap: any = [];
    scrollDown: boolean = true;
    lastScroll: number = -1;

    currentStep: string = '';
    currentStepObserver: Observer<string>;

    currentStory: string = '';

    bodyBgUrl: string = '';
    bodyBgUrlObservable: Observable<string>;
    bodyBgUrlObserver: Observer<string>;

    bodyClass: string = '';
    bodyClassObservable: Observable<string>;
    bodyClassObserver: Observer<string>;

    constructor(@Inject(DOCUMENT) private document: any) {
    }

    getScrollTop(): number {
        return this.document.scrollingElement.scrollTop;
    }

    @HostListener('window:scroll', [])
    onScroll() {
        this.setScrollingDirection();
    }

    setScrollingDirection(): void {
        this.scrollDown = this.lastScroll < this.document.scrollingElement.scrollTop;
        this.lastScroll = this.document.scrollingElement.scrollTop;
    }

    scrollingDown(): boolean {
        return this.scrollDown;
    }

    getWindowHeight() {
        return this.document.documentElement.clientHeight;
    }

    getWindowWidth() {
        return this.document.documentElement.clientWidth;
    }

    setCurrentStep(currentStep: string) {
        this.currentStep = currentStep;
        if (this.currentStepObserver !== undefined) {
            this.currentStepObserver.next(this.currentStep);
        }
    }

    getCurrentStep(): string {
        return this.currentStep;
    }

    getBodyBgUrlObservable(): Observable<string> {
        if (this.bodyBgUrlObservable === undefined) {
            this.bodyBgUrlObservable = new Observable<string>((obs) => {
                this.bodyBgUrlObserver = obs;
            });
        }

        return this.bodyBgUrlObservable;
    }

    getBodyBgUrl(): string {
        return this.bodyBgUrl;
    }

    setBodyBgUrl(url: string) {
        this.bodyBgUrl = url;
        this.bodyBgUrlObserver.next(this.bodyBgUrl);
    }

    clearBodyUrl() {
        this.setBodyBgUrl('none');
    }

    getBodyClassObservable(): Observable<string> {
        if (this.bodyClassObservable === undefined) {
            this.bodyClassObservable = new Observable<string>((obs) => {
                this.bodyClassObserver = obs;
            });
        }
        return this.bodyClassObservable;
    }

    getBodyClass(): string {
        return this.bodyClass;
    }

    setBodyBgClass(_class: string) {
        this.bodyClass = _class;
        this.bodyClassObserver.next(this.bodyClass);
    }

    addStep(step: ElementRef) {
        let found = false;
        for (let index in this.stepsMap) {
            if (this.stepsMap[index].nativeElement.tagName === step.nativeElement.tagName) {
                this.stepsMap[index] = step;
                found = true;
                break;
            }
        }
        if (!found) {
            this.stepsMap.push(step);
        }
        this.stepsMap.sort((a: ElementRef, b: ElementRef) => {
            return a.nativeElement.getBoundingClientRect().top - b.nativeElement.getBoundingClientRect().top;
        });
    }

    scrollToNextStep(currentStep: ElementRef) {
        for (let index in this.stepsMap) {
            if (this.stepsMap[index].nativeElement.tagName === currentStep.nativeElement.tagName && this.stepsMap[Number(index) + 1] !== undefined) {
                let top = this.stepsMap[Number(index) + 1].nativeElement.getBoundingClientRect().top + this.getScrollTop();
                this.scrollTo(top, 250);
                break;
            }
        }
    }

    scrollToStep(tagName: string, duration: number = 600) {
        for (let index in this.stepsMap) {
            if (this.stepsMap[index].nativeElement.tagName.toLowerCase() === tagName) {
                let top = this.stepsMap[index].nativeElement.getBoundingClientRect().top + this.getScrollTop();
                this.scrollTo(top, duration);
                break;
            }
        }
    }

    scrollTo(to: number, duration: number = 600) {

        try {
            window.scroll({
                top: to,
                behavior: 'smooth'
            });
        } catch (e) {
            if (this.document.scrollingElement.scrollTop === to)
                return;

            let start: number = this.document.scrollingElement.scrollTop;
            let diff = to - start;
            let scrollStep: number = Math.PI / (duration / 10);
            let count: number = 0, currPos: number;
            this.clearScrolling();
            this.scrollInterval = setInterval(() => {

                if (
                    this.document.scrollingElement.scrollTop !== to && (currPos === undefined ||
                    currPos < this.document.documentElement.scrollHeight)
                ) {
                    count = count + 1;
                    currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
                    this.document.scrollingElement.scrollTop = currPos;
                } else {
                    this.clearScrolling();
                }
            }, 10);
        }

    };

    clearScrolling() {
        clearInterval(this.scrollInterval);
        this.scrollInterval = undefined;
    }

    isScrollingActive(): boolean {
        return this.scrollInterval !== undefined;
    }

    resetBackground() {
        this.setBodyBgClass('');
        this.setBodyBgUrl('');
    }
}