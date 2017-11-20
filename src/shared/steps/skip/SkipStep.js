"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var BaseStep_1 = require("../base/BaseStep");
var platform_browser_1 = require("@angular/platform-browser");
var WindowService_1 = require("../../../services/WindowService");
var MapService_1 = require("../../../services/MapService");
var SkipStepComponent = (function (_super) {
    __extends(SkipStepComponent, _super);
    function SkipStepComponent(element, document, windowService, mapService) {
        _super.call(this, element, document, windowService);
        this.element = element;
        this.document = document;
        this.windowService = windowService;
        this.mapService = mapService;
    }
    SkipStepComponent.prototype.showImage = function () {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.5)) > offset.top;
    };
    SkipStepComponent.prototype.showTitle = function () {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.6)) > offset.top;
    };
    SkipStepComponent.prototype.showButton = function () {
        return true;
        // let offset = this.element.nativeElement.getBoundingClientRect();
        // return !this.windowService.scrollingDown() || ((this.getWindowHeight() * -1.7)) > offset.top
    };
    SkipStepComponent.prototype.goToNextStory = function () {
        this.windowService.setCurrentStory(this.step.next_story.link);
        this.windowService.setCurrentStep('cover');
        this.windowService.scrollTo(1, 0);
        this.mapService.reload();
    };
    SkipStepComponent.prototype.hasAuthors = function () {
        return this.step.contact_info != undefined && this.step.contact_info.authors != undefined && this.step.contact_info.authors.length > 0;
    };
    SkipStepComponent.prototype.getAuthors = function () {
        if (this.hasAuthors()) {
            return this.step.contact_info.authors;
        }
        return [];
    };
    SkipStepComponent.prototype.getAuthorsLink = function () {
        if (this.hasAuthors()) {
            return this.step.contact_info.author_link;
        }
        return '';
    };
    SkipStepComponent.prototype.hasContactInfo = function () {
        return this.step.contact_info != undefined;
    };
    SkipStepComponent.prototype.hasAddress = function () {
        return this.step.contact_info != undefined && this.step.contact_info.address != undefined;
    };
    SkipStepComponent.prototype.getCenterName = function () {
        if (this.hasAddress()) {
            return this.step.contact_info.address.center_name;
        }
        return '';
    };
    SkipStepComponent.prototype.getCenterContactInfo = function () {
        if (this.hasAddress()) {
            return this.step.contact_info.address.info;
        }
        return '';
    };
    SkipStepComponent.prototype.hasCredit = function () {
        return this.step.credit != undefined;
    };
    SkipStepComponent = __decorate([
        core_1.Component({
            selector: 'skip',
            templateUrl: '/templates/shared/steps/skip/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.ElementRef, Object, WindowService_1.WindowService, MapService_1.MapService])
    ], SkipStepComponent);
    return SkipStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.SkipStepComponent = SkipStepComponent;
//# sourceMappingURL=SkipStep.js.map