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
var ParagraphComponent = (function (_super) {
    __extends(ParagraphComponent, _super);
    function ParagraphComponent() {
        _super.apply(this, arguments);
    }
    ParagraphComponent.prototype.capitalized = function () {
        return this.item.capitalize != undefined && this.item.capitalize;
    };
    ParagraphComponent.prototype.highlight = function () {
        return this.item.highlight != undefined && this.item.highlight;
    };
    ParagraphComponent.prototype.bold = function () {
        return this.item.bold != undefined && this.item.bold;
    };
    ParagraphComponent.prototype.semibold = function () {
        return this.item.semibold != undefined && this.item.semibold;
    };
    ParagraphComponent = __decorate([
        core_1.Component({
            selector: 'paragraph',
            templateUrl: '/templates/shared/elements/paragraph/view.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ParagraphComponent);
    return ParagraphComponent;
}(BaseElement_1.BaseElementComponent));
exports.ParagraphComponent = ParagraphComponent;
//# sourceMappingURL=Paragraph.js.map