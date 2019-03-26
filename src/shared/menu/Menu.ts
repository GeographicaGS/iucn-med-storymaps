import { Component, Inject, Input, OnInit } from '@angular/core';
import { WindowService } from '../../services/WindowService';
import { DataService } from '../../services/DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: '/templates/shared/menu/view.html',
})
export class MenuComponent {

  @Input()
  set currentStory(value: any) {
    this.steps = value.steps || {};
  }

  steps = {};

  constructor(private windowService: WindowService,
              protected router: Router,
              @Inject(DataService) private storyService: DataService) {
  }

  isItemActive(item: string): boolean {
    return item === this.windowService.getCurrentStep();
  }

  getStepsKeys() {
    return Object.keys(this.steps);
  }

  getStepName(step: string) {
    return this.steps[step]['name'];
  }

  scrollTo(step: string) {
    if (step.toLowerCase() === 'skip') {
      this.windowService.scrollTo(9999);
    } else {
      this.windowService.scrollToStep(step);
    }
  }
}
