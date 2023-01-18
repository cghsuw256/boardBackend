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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const board_entity_1 = require("./board.entity");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 10 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "gender" }),
    __metadata("design:type", Number)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)("char", { name: "birth", length: 8 }),
    __metadata("design:type", String)
], User.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "account", length: 10 }),
    __metadata("design:type", String)
], User.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.Column)("char", { name: "password", length: 64 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "salt", length: 10 }),
    __metadata("design:type", String)
], User.prototype, "salt", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "permission" }),
    __metadata("design:type", Number)
], User.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => board_entity_1.Board, (Board) => Board.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "Board", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("user", { schema: "typeorm" })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map