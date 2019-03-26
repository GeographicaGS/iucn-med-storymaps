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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService_1 = require("../services/DataService");
var StoryGuard = /** @class */ (function () {
    function StoryGuard(dataService) {
        this.dataService = dataService;
    }
    StoryGuard.prototype.canActivate = function (route, state) {
        return this.dataService.initData();
    };
    StoryGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [DataService_1.DataService])
    ], StoryGuard);
    return StoryGuard;
}());
exports.StoryGuard = StoryGuard;
//# sourceMappingURL=StoryGuard.js.map