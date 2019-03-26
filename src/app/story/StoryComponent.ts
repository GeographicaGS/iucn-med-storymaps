import {
  Component, ElementRef, Inject, HostBinding, HostListener, Input, OnInit, OnDestroy, AfterViewInit,
  ViewChild
} from '@angular/core';
import { WindowService } from '../../services/WindowService';
import { DataService } from '../../services/DataService';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-story',
  templateUrl: '/templates/routes/story/view.html'
})
export class StoryComponent implements OnInit, AfterViewInit {
  currentStory: any = null;
  steps: any[] = [];
  subscription = new Subscription();
  @ViewChild('scrollbar') scrollbar: PerfectScrollbarComponent;

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
        this.windowService.setCurrentStep('cover');
        this.steps = Object.keys(this.currentStory['steps']).map(key => Object.assign(this.currentStory['steps'][key], {type: key}));
      }
    });
  }

  ngAfterViewInit() {

  }
}
