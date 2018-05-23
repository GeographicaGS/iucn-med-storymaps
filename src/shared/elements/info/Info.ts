import { Component, Input, HostBinding, Output, EventEmitter, ElementRef, Inject } from '@angular/core';
import { BaseElementComponent } from '../base-element/BaseElement';
import { WindowService } from '../../../services/WindowService';

@Component({
  selector: 'info',
  templateUrl: '/templates/shared/elements/info/view.html',
})
export class InfoComponent extends BaseElementComponent {

  @HostBinding('class.collapsed')

  @Input() collapsed: boolean = true;
  @Input() modalOpen: boolean = false;
  @Input() wmsValue: string = '';
  @Input() wmsCopied: boolean = null;

  @Output() manageLayers: EventEmitter<any> = new EventEmitter();
  @Output() downloadShp: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(WindowService) protected windowService: WindowService) {
    super(element, windowService)
  }

  toggleVisibility() {
    this.collapsed = !this.collapsed;
  }

  hasCredits() {
    return this.item.credit != undefined;
  }

  ngAfterViewInit() {
    if (this.item.collapsed != undefined) {
      this.collapsed = this.item.collapsed;
    }
    super.ngAfterViewInit();
  }

  toggleLayer(info: any = {}) {
    if (info.collapsed === false) return;

    let item: any = {};
    for (item of this.item) {
      item.collapsed = true;
    }

    info.collapsed = !info.collapsed;

    this.manageLayers.emit(info);
  }

  downloadFile(info: any = {}) {
    this.downloadShp.emit(info);
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

  openModal(info: any = {}) {
    this.wmsValue = info.shp;
    this.modalOpen = true;
    this.wmsCopied = null;
  }

  copyWmsValue() {
    let copyTextarea = <HTMLInputElement>document.querySelector('.wmsInput.active');
    copyTextarea.select();

    try {
      let successful = document.execCommand('copy');
      if (successful) {
        this.wmsCopied = true;
      } else {
        this.wmsCopied = false;
      }
    } catch (err) {
      console.log('Oops, unable to copy');
      this.wmsCopied = false;
    }
  }
}
