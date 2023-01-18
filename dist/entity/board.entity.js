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
exports.Board = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Board = class Board {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Board.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId' }),
    __metadata("design:type", Number)
], Board.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 50 }),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'content' }),
    __metadata("design:type", String)
], Board.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'author' }),
    __metadata("design:type", String)
], Board.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'birth', length: 8 }),
    __metadata("design:type", String)
], Board.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "createdAt", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Board.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("datetime", { name: "updatedAt", default: null }),
    __metadata("design:type", Date)
], Board.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.Board, {
        onDelete: 'CASCADE',
        onUpdate: "NO ACTION",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "userId", referencedColumnName: "id" }]),
    __metadata("design:type", user_entity_1.User)
], Board.prototype, "user", void 0);
Board = __decorate([
    (0, typeorm_1.Index)("FK_User_TO_Board_1", ["userId"], {}),
    (0, typeorm_1.Entity)('Board', { schema: 'typeorm' })
], Board);
exports.Board = Board;
//# sourceMappingURL=board.entity.js.map