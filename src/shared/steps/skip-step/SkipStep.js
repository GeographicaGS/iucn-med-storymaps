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
var core_1 = require("@angular/core");
var BaseStep_1 = require("../base-step/BaseStep");
var SkipStepComponent = (function (_super) {
    __extends(SkipStepComponent, _super);
    function SkipStepComponent() {
        _super.apply(this, arguments);
    }
    SkipStepComponent = __decorate([
        core_1.Component({
            selector: 'skip-step',
            templateUrl: '/shared/steps/skip-step/view.html',
        }), 
        __metadata('design:paramtypes', [])
    ], SkipStepComponent);
    return SkipStepComponent;
}(BaseStep_1.BaseStepComponent));
exports.SkipStepComponent = SkipStepComponent;
//# sourceMappingURL=SkipStep.js.map