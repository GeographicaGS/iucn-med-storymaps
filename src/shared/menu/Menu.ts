import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
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

  @Input()
  currentStep = 'cover';

  @Output()
  scrollTo = new EventEmitter<string>();

  steps = {};

  constructor(protected router: Router,
              @Inject(DataService) private storyService: DataService) {
  }

  isItemActive(item: string): boolean {
    return item === this.currentStep;
  }

  getStepsKeys() {
    return Object.keys(this.steps);
  }

  getStepName(step: string) {
    return this.steps[step]['name'];
  }

  onSectionClick(step: string) {
    this.scrollTo.emit(step);
  }
}
