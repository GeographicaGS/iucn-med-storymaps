import {Component, Input, HostBinding, Output, EventEmitter} from "@angular/core";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'modal',
    template: `
        <modal #myModal>
            ...xxxxxxxxxx
        </modal>
    `
})
export class CustomModalComponent extends ModalComponent {} 