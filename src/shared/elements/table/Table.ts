import {Component} from "@angular/core";
import {BaseElementComponent} from "../base-element/BaseElement";

@Component({
    selector: 'el-table',
    templateUrl: '/templates/shared/elements/table/view.html',
})
export class TableComponent extends BaseElementComponent {
    getHeaderTitle(key: string) {
        return this.item.header[key] || '';
    }

    getHeaders() {
        return this.getHeadersKeys().map((key: string) => {
            return this.item.headers[key];
        });
    }

    getHeadersKeys() {
        return Object.keys(this.item.headers);
    }

    getRows() {
        return this.item.rows;
    }

    getRowValue(row: any, key: string) {
        return row[key] || '';
    }

}
