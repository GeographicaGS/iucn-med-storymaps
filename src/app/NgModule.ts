import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {MainComponent} from './main/MainComponent';
import {MenuComponent} from './../shared/menu/Menu';

import {HomeStepComponent} from '../shared/steps/home/HomeStep';
import {IucnInfoStepComponent} from '../shared/steps/iucnInfo/IucnInfoStep';
import {IntroStepComponent} from '../shared/steps/intro/IntroStep';
import {CoverStepComponent} from '../shared/steps/cover/CoverStep';
import {MapStepComponent} from '../shared/steps/map/MapStep';
import {ConclusionStepComponent} from '../shared/steps/conclusion/ConclusionStep';
import {SkipStepComponent} from '../shared/steps/skip/SkipStep';

import {ImageComponent} from './../shared/elements/image/Image';
import {ElementBlockComponent} from './../shared/elements/element-block/ElementBlock';
import {ParagraphComponent} from './../shared/elements/paragraph/Paragraph';
import {QuoteComponent} from '../shared/elements/quote/Quote';
import {InfoComponent} from '../shared/elements/info/Info';
import {TableComponent} from '../shared/elements/table/Table';

import {StoryService} from './../services/StoryService';
import {MapService} from '../services/MapService';
import {WindowService} from '../services/WindowService';
import {LearnMoreComponent} from '../shared/elements/learn-more/LearnMore';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        InfoComponent,
        TableComponent,
        QuoteComponent,
        ParagraphComponent,
        ElementBlockComponent,
        ImageComponent,
        HomeStepComponent,
        IucnInfoStepComponent,
        IntroStepComponent,
        CoverStepComponent,
        MapStepComponent,
        ConclusionStepComponent,
        SkipStepComponent,
        MenuComponent,
        LearnMoreComponent,
        MainComponent
    ],
    providers: [
        WindowService,
        MapService,
        StoryService
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