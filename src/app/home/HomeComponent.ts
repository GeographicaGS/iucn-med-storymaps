import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { BaseStepComponent } from '../../shared/steps/base/BaseStep';
import { WindowService } from '../../services/WindowService';
import { DataService } from '../../services/DataService';

@Component({
  selector: 'app-home',
  templateUrl: '/templates/routes/home/view.html',
})
export class HomeComponent implements OnInit {
  @Input() stories: any = {};

  home: any = {};

  constructor(protected dataService: DataService,
              @Inject(DOCUMENT) protected document: any,
              protected windowService: WindowService) {
  }

  ngOnInit(): void {
    this.home = this.dataService.getHomeData();
    this.windowService.scrollTo(1, 0);
    this.windowService.setBodyBgUrl(`url(${this.home.background.url})`);
    this.windowService.setBodyBgClass(this.home.background.class);
  }

  getPreviewTitle(): string {
    return this.home.preview.title;
  }

  getPreviewDescription(): string {
    return this.home.preview.description;
  }

  getPreviewSubtitle(): string {
    return this.home.preview.subtitle;
  }

  getPreviewSubtitle2(): string {
    return this.home.preview.subtitle2;
  }

  getHomeAfterButton(): string {
    return this.home.afterButtons;
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

  homeHasColumns() {
    return this.home.columns instanceof Array;
  }

  hasCredits(): boolean {
    return this.home.footer.credit !== undefined;
  }

  hasDescription(): boolean {
    return this.hasCredits() && this.home.footer.credit.description !== undefined;
  }
}
