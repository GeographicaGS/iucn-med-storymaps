import {Component, Inject} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
    selector: 'menu',
    templateUrl: './shared/menu/view.html',
})
export class MenuComponent {
    constructor(@Inject(DOCUMENT) private document: Document) {

    }

    goHome() {

    }

    goTo() {

    }

    isActive(): boolean {
        return false;
    }

    goNextStory() {

    }
}
