"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var MainComponent_1 = require("./main/MainComponent");
var Menu_1 = require("./../shared/menu/Menu");
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
var Table_1 = require("../shared/elements/table/Table");
var DataService_1 = require("../services/DataService");
var MapService_1 = require("../services/MapService");
var WindowService_1 = require("../services/WindowService");
var LearnMore_1 = require("../shared/elements/learn-more/LearnMore");
var IUCNInfoComponent_1 = require("./info/IUCNInfoComponent");
var HomeComponent_1 = require("./home/HomeComponent");
var StoryComponent_1 = require("./story/StoryComponent");
var RoutingModule_1 = require("./RoutingModule");
var StoryGuard_1 = require("../guard/StoryGuard");
var StoriesComponent_1 = require("./stories/StoriesComponent");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                RoutingModule_1.RoutingModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule
            ],
            declarations: [
                Info_1.InfoComponent,
                Table_1.TableComponent,
                Quote_1.QuoteComponent,
                Paragraph_1.ParagraphComponent,
                ElementBlock_1.ElementBlockComponent,
                Image_1.ImageComponent,
                IntroStep_1.IntroStepComponent,
                CoverStep_1.CoverStepComponent,
                MapStep_1.MapStepComponent,
                ConclusionStep_1.ConclusionStepComponent,
                SkipStep_1.SkipStepComponent,
                Menu_1.MenuComponent,
                LearnMore_1.LearnMoreComponent,
                MainComponent_1.MainComponent,
                IUCNInfoComponent_1.IUCNInfoComponent,
                HomeComponent_1.HomeComponent,
                StoriesComponent_1.StoriesComponent,
                StoryComponent_1.StoryComponent,
            ],
            providers: [
                StoryGuard_1.StoryGuard,
                WindowService_1.WindowService,
                MapService_1.MapService,
                DataService_1.DataService,
                {
                    provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [
                MainComponent_1.MainComponent
            ]
        })
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