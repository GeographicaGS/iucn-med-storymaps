"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var InfoComponent = /** @class */ (function (_super) {
    __extends(InfoComponent, _super);
    function InfoComponent(element, windowService) {
        var _this = _super.call(this, element, windowService) || this;
        _this.element = element;
        _this.windowService = windowService;
        _this.collapsed = true;
        _this.modalOpen = false;
        _this.wmsValue = '';
        _this.wmsCopied = null;
        _this.manageLayers = new core_1.EventEmitter();
        _this.downloadShp = new core_1.EventEmitter();
        return _this;
    }
    InfoComponent.prototype.toggleVisibility = function () {
        this.collapsed = !this.collapsed;
    };
    InfoComponent.prototype.hasCredits = function () {
        return this.item.credit !== undefined;
    };
    InfoComponent.prototype.ngAfterViewInit = function () {
        if (this.item.collapsed !== undefined) {
            this.collapsed = this.item.collapsed;
        }
        _super.prototype.ngAfterViewInit.call(this);
    };
    InfoComponent.prototype.toggleLayer = function (info) {
        if (info === void 0) { info = {}; }
        if (info.collapsed === false)
            return;
        var item = {};
        for (var _i = 0, _a = this.item; _i < _a.length; _i++) {
            item = _a[_i];
            item.collapsed = true;
        }
        info.collapsed = !info.collapsed;
        this.manageLayers.emit(info);
    };
    InfoComponent.prototype.downloadFile = function (info) {
        if (info === void 0) { info = {}; }
        this.downloadShp.emit(info);
    };
    InfoComponent.prototype.toggleModal = function () {
        this.modalOpen = !this.modalOpen;
    };
    InfoComponent.prototype.openModal = function (info) {
        if (info === void 0) { info = {}; }
        this.wmsValue = info.shp;
        this.modalOpen = true;
        this.wmsCopied = null;
    };
    InfoComponent.prototype.copyWmsValue = function () {
        var copyTextarea = document.querySelector('.wmsInput.active');
        copyTextarea.select();
        try {
            var successful = document.execCommand('copy');
            if (successful) {
                this.wmsCopied = true;
            }
            else {
                this.wmsCopied = false;
            }
        }
        catch (err) {
            console.log('Oops, unable to copy');
            this.wmsCopied = false;
        }
    };
    __decorate([
        core_1.HostBinding('class.collapsed'),
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InfoComponent.prototype, "collapsed", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InfoComponent.prototype, "modalOpen", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InfoComponent.prototype, "wmsValue", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InfoComponent.prototype, "wmsCopied", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InfoComponent.prototype, "manageLayers", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], InfoComponent.prototype, "downloadShp", void 0);
    InfoComponent = __decorate([
        core_1.Component({
            selector: 'info',
            templateUrl: '/templates/shared/elements/info/view.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(WindowService_1.WindowService)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            WindowService_1.WindowService])
    ], InfoComponent);
    return InfoComponent;
}(BaseElement_1.BaseElementComponent));
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=Info.js.map