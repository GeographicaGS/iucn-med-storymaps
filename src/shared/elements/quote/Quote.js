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
var BaseElement_1 = require("../base-element/BaseElement");
var QuoteComponent = (function (_super) {
    __extends(QuoteComponent, _super);
    function QuoteComponent() {
        _super.apply(this, arguments);
    }
    QuoteComponent.prototype.showContent = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        return (this.windowService.getWindowHeight() * 0.65) > (offset.top);
    };
    QuoteComponent = __decorate([
        core_1.Component({
            selector: 'el-quote',
            templateUrl: '/templates/shared/elements/quote/view.html',
        }), 
        __metadata('design:paramtypes', [])
    ], QuoteComponent);
    return QuoteComponent;
}(BaseElement_1.BaseElementComponent));
exports.QuoteComponent = QuoteComponent;
//# sourceMappingURL=Quote.js.map