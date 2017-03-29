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
    currentStepObservable: Observable<string>;
    currentStepObserver: Observer<string>;

    currentStory: string = '';
    currentStoryObservable: Observable<string>;
    currentStoryObserver: Observer<string>;

    bodyBgUrl: string = '';
    bodyBgUrlObservable: Observable<string>;
    bodyBgUrlObserver: Observer<string>;

    bodyClass: string = '';
    bodyClassObservable: Observable<string>;
    bodyClassObserver: Observer<string>;

    constructor(@Inject(DOCUMENT) private document: any) {
        this.currentStepObservable = new Observable<string>((obs) => {
            this.currentStepObserver = obs;
        });

        this.bodyBgUrlObservable = new Observable<string>((obs) => {
            this.bodyBgUrlObserver = obs;
        });
        this.bodyClassObservable = new Observable<string>((obs) => {
            this.bodyClassObserver = obs;
        });
        this.currentStoryObservable = new Observable<string>((obs) => {
            this.currentStoryObserver = obs;
        });
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
        this.currentStepObserver.next(this.currentStep);
    }

    getCurrentStoryObservable(): Observable<string> {
        return this.currentStoryObservable;
    }

    getCurrentStory(): string {
        return this.currentStory;
    }

    setCurrentStory(currentStory: string) {
        this.currentStory = currentStory;
        this.currentStoryObserver.next(this.currentStory);
    }

    getCurrentStepObservable(): Observable<string> {
        return this.currentStepObservable;
    }

    getCurrentStep(): string {
        return this.currentStep;
    }

    getBodyBgUrlObservable(): Observable<string> {
        return this.bodyBgUrlObservable;
    }

    getBodyBgUrl(): string {
        return this.bodyBgUrl;
    }

    setBodyBgUrl(url: string) {
        this.bodyBgUrl = url;
        this.bodyBgUrlObserver.next(this.bodyBgUrl);
    }

    getBodyClassObservable(): Observable<string> {
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
        this.stepsMap.push(step);
        this.stepsMap.sort((a: ElementRef, b: ElementRef) => {
            return a.nativeElement.getBoundingClientRect().top - b.nativeElement.getBoundingClientRect().top;
        });
    }

    scrollToNextStep(currentStep: ElementRef) {
        for (let index in this.stepsMap) {
            if (this.stepsMap[index].nativeElement.tagName == currentStep.nativeElement.tagName && this.stepsMap[Number(index) + 1] != undefined) {
                let top = this.stepsMap[Number(index) + 1].nativeElement.getBoundingClientRect().top + this.getScrollTop();
                this.clearScrolling();
                this.scrollTo(top, 250);
                break;
            }
        }
    }

    scrollToStep(tagName: string) {
        for (let index in this.stepsMap) {
            if (this.stepsMap[index].nativeElement.tagName.toLowerCase() == tagName) {
                let top = this.stepsMap[index].nativeElement.getBoundingClientRect().top + this.getScrollTop();
                this.clearScrolling();
                this.scrollTo(top);
                break;
            }
        }
    }

    scrollTo(to: number, duration: number = 600) {
        if (this.document.scrollingElement.scrollTop == to)
            return;

        let start: number = this.document.scrollingElement.scrollTop;
        let diff = to - start;
        let scrollStep: number = Math.PI / (duration / 10);
        let count: number = 0, currPos: number;
        this.scrollInterval = setInterval(() => {

            if (this.document.scrollingElement.scrollTop !== to && (currPos == undefined || currPos < this.document.documentElement.scrollHeight)) {
                count = count + 1;
                currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
                this.document.scrollingElement.scrollTop = currPos;
            } else {
                this.clearScrolling();
            }
        }, 10);

    };

    clearScrolling() {
        clearInterval(this.scrollInterval);
        this.scrollInterval = undefined;
    }

    isScrollingActive() : boolean{
        return this.scrollInterval != undefined;
    }
}