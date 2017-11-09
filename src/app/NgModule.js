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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var forms_1 = require('@angular/forms');
var MainComponent_1 = require("./main/MainComponent");
var Menu_1 = require("./../shared/menu/Menu");
var HomeStep_1 = require("../shared/steps/home/HomeStep");
var IucnInfoStep_1 = require("../shared/steps/iucnInfo/IucnInfoStep");
var IntroStep_1 = require("../shared/steps/intro/IntroStep");
var CoverStep_1 = require("../shared/steps/cover/CoverStep");
var MapStep_1 = require("../shared/steps/map/MapStep");
var ConclusionStep_1 = require("../shared/steps/conclusion/ConclusionStep");
var SkipStep_1 = require("../shared/steps/skip/SkipStep");
var Image_1 = require("./../shared/elements/image/Image");
var ElementBlock_1 = require("./../shared/elements/element-block/ElementBlock");
var Paragraph_1 = require("./../shared/elements/paragraph/Paragraph");
var Quote_1 = require("../shared/elements/quote/Quote");
var Info_1 = require("../shared/elements/info/Info");
var StoryService_1 = require('./../services/StoryService');
var MapService_1 = require("../services/MapService");
var WindowService_1 = require("../services/WindowService");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
            ],
            declarations: [
                Info_1.InfoComponent,
                Quote_1.QuoteComponent,
                Paragraph_1.ParagraphComponent,
                ElementBlock_1.ElementBlockComponent,
                Image_1.ImageComponent,
                HomeStep_1.HomeStepComponent,
                IucnInfoStep_1.IucnInfoStepComponent,
                IntroStep_1.IntroStepComponent,
                CoverStep_1.CoverStepComponent,
                MapStep_1.MapStepComponent,
                ConclusionStep_1.ConclusionStepComponent,
                SkipStep_1.SkipStepComponent,
                Menu_1.MenuComponent,
                MainComponent_1.MainComponent
            ],
            providers: [
                WindowService_1.WindowService,
                MapService_1.MapService,
                StoryService_1.StoryService
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
// if (productionMode) {
core_1.enableProdMode();
// }
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
//# sourceMappingURL=NgModule.js.map