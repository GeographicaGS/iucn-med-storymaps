import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from "@angular/http";
import {ScrollSpyModule} from 'ng2-scrollspy';

import {StoryService} from '../services/StoryService';

import {MainComponent} from "./main/MainComponent";
import {HomeController} from '../routes/home/HomeController';
import {MenuComponent} from "../shared/menu/Menu";

import {IntroStepComponent} from "../shared/steps/intro-step/IntroStep";
import {CoverStepComponent} from "../shared/steps/cover-step/CoverStep";
import {MapStepComponent} from "../shared/steps/map-step/MapStep";
import {ConclusionStepComponent} from "../shared/steps/conclusion-step/ConclusionStep";
import {SkipStepComponent} from "../shared/steps/skip-step/SkipStep";

import {ImageComponent} from "../shared/elements/image/Image";
import {ElementBlockComponent} from "../shared/elements/element-block/ElementBlock";
import {ParagraphComponent} from "../shared/elements/paragraph/Paragraph";


const appRoutes: Routes = [
    {
        path: ':type',
        component: HomeController
    },
    {
        path: '**',
        component: HomeController
    }
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        ScrollSpyModule.forRoot(),
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        ParagraphComponent,
        ElementBlockComponent,
        ImageComponent,
        IntroStepComponent,
        CoverStepComponent,
        MapStepComponent,
        ConclusionStepComponent,
        SkipStepComponent,
        MenuComponent,
        HomeController,
        MainComponent
    ],
    providers: [
        StoryService,
        { provide: Window,  useValue: window }
    ],
    bootstrap: [
        MainComponent
    ]
})

export class AppModule {
}

let productionMode = false;

if (productionMode) {
    enableProdMode();
}

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);