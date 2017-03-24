"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var ng2_scrollspy_1 = require('ng2-scrollspy');
var StoryService_1 = require('../services/StoryService');
var MainComponent_1 = require("./main/MainComponent");
var HomeController_1 = require('../routes/home/HomeController');
var Menu_1 = require("../shared/menu/Menu");
var IntroStep_1 = require("../shared/steps/intro-step/IntroStep");
var CoverStep_1 = require("../shared/steps/cover-step/CoverStep");
var MapStep_1 = require("../shared/steps/map-step/MapStep");
var ConclusionStep_1 = require("../shared/steps/conclusion-step/ConclusionStep");
var SkipStep_1 = require("../shared/steps/skip-step/SkipStep");
var Image_1 = require("../shared/elements/image/Image");
var ElementBlock_1 = require("../shared/elements/element-block/ElementBlock");
var Paragraph_1 = require("../shared/elements/paragraph/Paragraph");
var appRoutes = [
    {
        path: ':type',
        component: HomeController_1.HomeController
    },
    {
        path: '**',
        component: HomeController_1.HomeController
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                ng2_scrollspy_1.ScrollSpyModule.forRoot(),
                router_1.RouterModule.forRoot(appRoutes),
            ],
            declarations: [
                Paragraph_1.ParagraphComponent,
                ElementBlock_1.ElementBlockComponent,
                Image_1.ImageComponent,
                IntroStep_1.IntroStepComponent,
                CoverStep_1.CoverStepComponent,
                MapStep_1.MapStepComponent,
                ConclusionStep_1.ConclusionStepComponent,
                SkipStep_1.SkipStepComponent,
                Menu_1.MenuComponent,
                HomeController_1.HomeController,
                MainComponent_1.MainComponent
            ],
            providers: [
                StoryService_1.StoryService,
                { provide: Window, useValue: window }
            ],
            bootstrap: [
                MainComponent_1.MainComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
var productionMode = false;
if (productionMode) {
    core_1.enableProdMode();
}
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=NgModule.js.map