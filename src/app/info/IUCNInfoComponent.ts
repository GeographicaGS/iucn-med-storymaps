import { Component, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../services/WindowService';
import { DataService } from '../../services/DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iucn-info',
  templateUrl: '/templates/routes/info/view.html',
})
export class IUCNInfoComponent {


  home: any = {};
  info: any = {};

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(DOCUMENT) protected document: any,
              protected router: Router,
              protected dataService: DataService,
              protected windowService: WindowService) {
  }

  ngOnInit(): void {
    this.home = this.dataService.getHomeData();
    this.info = this.dataService.getIUCNInfoData();
    this.windowService.resetBackground();
    this.windowService.updateSocialMetaTags(
      this.home.preview.title,
      this.home.preview.description,
      this.home.background.src,
      document.location.href,
    );
  }


  aboutHasBlocks(): boolean {
    return Array.isArray(this.info.blocks);
  }

  hasCredit(): boolean {
    return this.home.footer.credit !== undefined;
  }

  getCenterContactInfo(): string {
    return this.home.footer.address.info;
  }

  hasAddress(): boolean {
    return this.home.footer.address !== undefined;
  }

  getCenterName(): string {
    return this.home.footer.address.center_name;
  }
}
