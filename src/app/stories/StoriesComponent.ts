import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowService } from '../../services/WindowService';
import { DataService } from '../../services/DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: '/templates/routes/stories/view.html',
})
export class StoriesComponent implements OnInit {
  @Input() stories: any = {};

  scaling = '';
  scalingInProgress = false;
  search = '';

  constructor(@Inject(ElementRef) protected element: ElementRef,
              @Inject(DOCUMENT) protected document: any,
              protected router: Router,
              protected dataService: DataService,
              protected windowService: WindowService) {
  }

  ngOnInit(): void {
    this.stories = this.dataService.getStories();
    const home: any = this.dataService.getHomeData();
    this.windowService.setBodyBgUrl(`url(${home.background.url})`);
    this.windowService.setBodyBgClass(`${home.background.class} blur`);
    this.windowService.updateSocialMetaTags(
      home.preview.title,
      home.preview.description,
      home.background.url,
      document.location.href,
    );
  }

  isScaling(story: string): boolean {
    return this.scaling === story;
  }

  hasSomeScaling(): boolean {
    return this.scaling !== '';
  }

  getStoriesKeys(): string[] {
    let keys = Object.keys(this.stories || {});
    if (this.search !== '') {
      keys = keys.filter((name: string) => {
        return this.getStoryTitle(name).indexOf(this.search) > -1;
      });
    }
    return keys;
  }

  getStoryTitle(story: string): string {
    return this.stories[story].steps.cover.title;
  }

  getStoryBackgroundSrc(story: string) {
    return this.stories[story].steps.cover.background.url;
  }

  goToStory(story: string) {
    this.windowService.setBodyBgUrl(this.stories[story].steps.cover.background.url);
    this.scaling = story;
    this.scalingInProgress = true;
    this.goTo(story, 'cover');
  }

  goToMap(story: string) {
    this.goTo(story, 'map');
  }

  goTo(story: string, step: string) {
    this.router.navigate(['/story', story], {queryParams: {step: step}});
  }

  hasAuthors(story: string) {
    return this.stories[story].steps.skip.contact_info.authors instanceof Array;
  }

  getAuthors(story: string) {
    if (this.stories[story].steps.skip.contact_info.authors instanceof Array) {
      return this.stories[story].steps.skip.contact_info.authors
          .filter((i: any) => i.name)
          .map((item: any) => item.name);
    }
    return [];
  }
}
