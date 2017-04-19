import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import {MainComponent} from "./main/MainComponent";
import {MenuComponent} from "./../shared/menu/Menu";

import {HomeStepComponent} from "../shared/steps/home/HomeStep";
import {IucnInfoStepComponent} from "../shared/steps/iucnInfo/IucnInfoStep";
import {IntroStepComponent} from "../shared/steps/intro/IntroStep";
import {CoverStepComponent} from "../shared/steps/cover/CoverStep";
import {MapStepComponent} from "../shared/steps/map/MapStep";
import {ConclusionStepComponent} from "../shared/steps/conclusion/ConclusionStep";
import {SkipStepComponent} from "../shared/steps/skip/SkipStep";

import {ImageComponent} from "./../shared/elements/image/Image";
import {ElementBlockComponent} from "./../shared/elements/element-block/ElementBlock";
import {ParagraphComponent} from "./../shared/elements/paragraph/Paragraph";
import {QuoteComponent} from "../shared/elements/quote/Quote";
import {InfoComponent} from "../shared/elements/info/Info";

import {StoryService} from './../services/StoryService';
import {MapService} from "../services/MapService";
import {WindowService} from "../services/WindowService";

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        HttpModule,
    ],
    declarations: [
        InfoComponent,
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