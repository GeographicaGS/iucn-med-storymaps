import {
  Component, ElementRef, OnInit, AfterViewInit,
  ViewChild
} from '@angular/core';
import { WindowService } from '../../services/WindowService';
import { DataService } from '../../services/DataService';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { Subscription } from 'rxjs/Subscription';
import { CoverStepComponent } from '../../shared/steps/cover/CoverStep';
import { IntroStepComponent } from '../../shared/steps/intro/IntroStep';
import { MapStepComponent } from '../../shared/steps/map/MapStep';
import { ConclusionStepComponent } from '../../shared/steps/conclusion/ConclusionStep';
import { SkipStepComponent } from '../../shared/steps/skip/SkipStep';

@Component({
  selector: 'app-story',
  templateUrl: '/templates/routes/story/view.html'
})
export class StoryComponent implements OnInit, AfterViewInit {
  currentStory: any = null;
  currentStep = 'cover';
  steps: any[] = [];
  subscription = new Subscription();

  @ViewChild('scrollbar') scrollbar: PerfectScrollbarComponent;
  @ViewChild('cover') cover: CoverStepComponent;
  @ViewChild('intro') intro: IntroStepComponent;
  @ViewChild('map') map: MapStepComponent;
  @ViewChild('conclusion') conclusion: ConclusionStepComponent;
  @ViewChild('skip') skip: SkipStepComponent;


  constructor(protected element: ElementRef,
              protected dataService: DataService,
              protected route: ActivatedRoute,
              protected router: Router,
              protected windowService: WindowService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.currentStory = this.dataService.getStory(params.slug);
      if (!this.currentStory) {
        this.router.navigate(['/']);
      } else {
        this.windowService.updateSocialMetaTags(
          this.currentStory.steps.cover.title,
          this.currentStory.steps.cover.subtitle,
          this.currentStory.steps.cover.background.url,
          document.location.href,
        );
        this.currentStep = ((this.route.queryParams as any).value || {step: 'cover'})['step'];
        this.steps = Object.keys(this.currentStory['steps']).map(key => Object.assign(this.currentStory['steps'][key], {type: key}));
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.onMenuClick(this.currentStep);
    }, 500);
  }

  onChangeScrollDown(down = false) {
    this.windowService.scrollDown = down;
  }

  onScroll() {
    const keys = Object.keys(this.currentStory['steps']);
    const offset = document.documentElement.clientHeight * 0.3;
    const idx = keys.findIndex(key => {
      const el = this.element.nativeElement.querySelector(`#${key}`);
      if (!el) {
        return false;
      }
      const top = el.getBoundingClientRect().top;
      const bottom = el.getBoundingClientRect().bottom;
      return this.windowService.scrollingDown() && top > -20 && top < offset
        || !this.windowService.scrollingDown() && bottom > 20 && bottom < offset;
    });
    if (idx > -1) {
      this.currentStep = keys[idx];
      this[this.currentStep].onScroll();
    }
  }

  onMenuClick(step: string) {
    this.currentStep = step;
    if (this.currentStep === 'skip') {
      this.scrollbar.directiveRef.scrollToY(99999, 800);

    } else {
      this.scrollbar.directiveRef.scrollToElement('#' + this.currentStep, 0, 800);
    }
  }

}
