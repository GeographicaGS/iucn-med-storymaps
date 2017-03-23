import {Component} from "@angular/core";
import {AppService} from "../../services/AppService";

@Component({
    selector: 'menu',
    templateUrl: '/template/views/components/menu.html'
})
export class MenuComponent {
    constructor(private _app: AppService) {

    }
}
