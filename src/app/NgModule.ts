import {enableProdMode, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {RouterModule, Routes, Router, ActivatedRoute} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule, Http} from "@angular/http";

import {StoryService} from '../services/StoryService';

import {AppComponent} from "./App";
import {HomeController} from '../routes/HomeController';
import {StoryController} from "../routes/StoryController";
import {NotFoundController} from "../routes/NotFoundController";


const appRoutes: Routes = [
    {
        path: '',
        component: HomeController
    },

    {
        path: 'not-found',
        component: NotFoundController
    },
    {
        path: 'story/:type',
        component: StoryController
    },
    {
        path: '**',
        redirectTo: ['/not-found']
    }
];

@NgModule({
    schemas: [],
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        NotFoundController,
        HomeController,
        StoryController,
        AppComponent
    ],
    providers: [
        StoryService,
    ],
    bootstrap: [
        AppComponent
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