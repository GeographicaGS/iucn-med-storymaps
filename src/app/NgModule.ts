import { enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main/MainComponent';
import { MenuComponent } from './../shared/menu/Menu';

import { IntroStepComponent } from '../shared/steps/intro/IntroStep';
import { CoverStepComponent } from '../shared/steps/cover/CoverStep';
import { MapStepComponent } from '../shared/steps/map/MapStep';
import { ConclusionStepComponent } from '../shared/steps/conclusion/ConclusionStep';
import { SkipStepComponent } from '../shared/steps/skip/SkipStep';

import { ImageComponent } from './../shared/elements/image/Image';
import { ElementBlockComponent } from './../shared/elements/element-block/ElementBlock';
import { ParagraphComponent } from './../shared/elements/paragraph/Paragraph';
import { QuoteComponent } from '../shared/elements/quote/Quote';
import { InfoComponent } from '../shared/elements/info/Info';
import { TableComponent } from '../shared/elements/table/Table';

import { DataService } from '../services/DataService';
import { MapService } from '../services/MapService';
import { WindowService } from '../services/WindowService';
import { LearnMoreComponent } from '../shared/elements/learn-more/LearnMore';
import { IUCNInfoComponent } from './info/IUCNInfoComponent';
import { HomeComponent } from './home/HomeComponent';
import { StoryComponent } from './story/StoryComponent';
import { RoutingModule } from './RoutingModule';
import { StoryGuard } from '../guard/StoryGuard';
import { StoriesComponent } from './stories/StoriesComponent';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    PerfectScrollbarModule
  ],
  declarations: [
    InfoComponent,
    TableComponent,
    QuoteComponent,
    ParagraphComponent,
    ElementBlockComponent,
    ImageComponent,
    IntroStepComponent,
    CoverStepComponent,
    MapStepComponent,
    ConclusionStepComponent,
    SkipStepComponent,
    MenuComponent,
    LearnMoreComponent,
    MainComponent,
    IUCNInfoComponent,
    HomeComponent,
    StoriesComponent,
    StoryComponent,
  ],
  providers: [
    StoryGuard,
    WindowService,
    MapService,
    DataService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [
    MainComponent
  ]
})

export class AppModule {
}

let productionMode = false;

// if (productionMode) {
enableProdMode();
// }

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);