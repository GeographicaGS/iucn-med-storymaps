import { Component, ElementRef, Inject } from '@angular/core';
import { BaseElementComponent } from '../base-element/BaseElement';
import { WindowService } from '../../../services/WindowService';

@Component({
  selector: 'el-table',
  templateUrl: '/templates/shared/elements/table/view.html',
})
export class TableComponent extends BaseElementComponent {

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(WindowService) protected windowService: WindowService) {
    super(element, windowService);
  }

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
