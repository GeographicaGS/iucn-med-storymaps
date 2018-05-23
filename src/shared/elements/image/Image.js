"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BaseElement_1 = require("../base-element/BaseElement");
var WindowService_1 = require("../../../services/WindowService");
var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(element, windowService) {
        var _this = _super.call(this, element, windowService) || this;
        _this.element = element;
        _this.windowService = windowService;
        return _this;
    }
    ImageComponent.prototype.getBackgroundSrc = function () {
        return this.item.url != undefined ? this.item.url : 'none';
    };
    ImageComponent.prototype.hasIco = function () {
        return this.item.credit.ico == undefined || this.item.credit.ico;
    };
    ImageComponent = __decorate([
        core_1.Component({
            selector: 'image',
            templateUrl: '/templates/shared/elements/image/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(WindowService_1.WindowService)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            WindowService_1.WindowService])
    ], ImageComponent);
    return ImageComponent;
}(BaseElement_1.BaseElementComponent));
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=Image.js.map