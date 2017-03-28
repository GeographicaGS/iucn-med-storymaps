import {Injectable, Inject, HostListener} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";
import {Observable, Observer} from "rxjs";

@Injectable()
export class WindowService {
    stepsMap: any = [];
    scrollDown: boolean;
    lastScroll: number = 0;
    currentStep: string = '';
    currentStepObservable: Observable<string>;
    currentStepObserver: Observer<string>;

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
    }

    getScrollTop(): number {
        return this.document.scrollingElement.scrollTop;
    }

    @HostListener('window:scroll', [])
    onScroll() {
        this.setScrollingDirection();
        this.updateCurrentStep();
    }

    updateCurrentStep() {
        let currentIndex = 0;
        let currentStep = this.stepsMap.filter((item: any, index: number) => {
            if (item.name == this.currentStep) {
                currentIndex = index;
            }
            return item.name == this.currentStep;
        });
        if (!currentStep.length) {
            currentStep.push(this.stepsMap[0]);
        }
        currentStep = currentStep[0];

        let limit = this.getWindowHeight() * 0.5;
        if (this.scrollingDown() && (Number(this.document.scrollingElement.scrollTop) + limit) > currentStep.bottom) {
            if (this.stepsMap[currentIndex + 1] != undefined) {
                this.setCurrentStep(this.stepsMap[currentIndex + 1]['name']);
            }
        } else if (!this.scrollingDown() && (this.document.scrollingElement.scrollTop + limit) < currentStep.top) {
            if (this.stepsMap[currentIndex - 1] != undefined) {
                this.setCurrentStep(this.stepsMap[currentIndex - 1]['name']);
            }
        }
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

    addStep(stepName: string, top: number, bottom: number) {
        this.stepsMap.push({
            top: top,
            bottom: bottom,
            name: stepName,
        });
        this.stepsMap.sort((a: any, b: any) => {
            return a.top - b.top;
        });
    }

    scrollToNextStep(currentStep: string) {
        let currentIndex = 0;
        let step = this.stepsMap.filter((item: any, index: number) => {
            if (item.name == currentStep) {
                currentIndex = index;
            }
            return item.name == currentStep;
        });
        if (this.stepsMap[currentIndex] != undefined) {
            this.scrollTo(this.stepsMap[currentIndex].bottom, 600);
        }
    }

    scrollToStep(currentStep: string) {
        let currentIndex = 0;
        let step = this.stepsMap.filter((item: any, index: number) => {
            if (item.name == currentStep) {
                currentIndex = index;
            }
            return item.name == currentStep;
        });
        if (this.stepsMap[currentIndex] != undefined) {
            this.scrollTo(this.stepsMap[currentIndex].top, 600);
        }
    }

    scrollTo(to: number, duration: number) {

        if (this.document.scrollingElement.scrollTop == to)
            return;

        let start: number = this.document.scrollingElement.scrollTop;
        let diff = to - start;
        let scrollStep: number = Math.PI / (duration / 10);
        let count: number = 0, currPos: number;

        let scrollInterval = setInterval(function () {
            if (this.document.scrollingElement.scrollTop !== to && (currPos == undefined || currPos < this.document.documentElement.scrollHeight)) {
                count = count + 1;
                currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
                this.document.scrollingElement.scrollTop = currPos;
            } else {
                clearInterval(scrollInterval);
            }
        }, 10);
    };
}