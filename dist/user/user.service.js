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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user.entity");
const typeorm_2 = require("typeorm");
const text_1 = require("../util/text");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async userReg(req, res) {
        const { name, gender, birth, account, password, permission } = req.body;
        if (name == "" || name > 10) {
            res.status(400).send({
                success: false,
                msg: "올바른 이름을 입력해주세요"
            });
        }
        const isUser = await this.userRepository.find({
            where: { account: account }
        });
        if (isUser.length == 0) {
            const salt = (0, text_1.getRandom)('all', 10);
            const encrypt = (0, text_1.hash)(password + salt);
            const result = await this.userRepository.insert({
                name,
                gender,
                birth,
                account,
                password: encrypt,
                salt,
                permission
            });
            res.status(201).send({
                success: true,
                msg: "성공적으로 가입이 완료되었습니다.",
                result
            });
        }
        else {
            res.status(400).send({
                success: false,
                msg: "이미 해당하는 유저가 있습니다."
            });
        }
    }
    async findOne(account) {
        return await this.userRepository.findOneBy({ account });
    }
    async getSignIn(res, req) {
        const { account, password } = req.body;
        const user = await this.findOne(account);
        if (!user) {
            return res.status(400).send({
                success: false,
                msg: '해당하는 유저가 없습니다.',
            });
        }
        else {
            if (user.password === (0, text_1.hash)(password + user.salt)) {
                return res.status(200).send({
                    success: true,
                    msg: '로그인을 성공적으로 완료했습니다.',
                    token: (0, jsonwebtoken_1.sign)({
                        account: user.account,
                        name: user.name,
                        gender: user.gender,
                        birth: user.birth,
                        userid: user.id,
                    }, 'SECRET', { expiresIn: user.permission < 3 ? '60m' : '15m' }),
                });
            }
            else
                return res.status(400).send({
                    success: false,
                    msg: '아이디나 비밀번호를 확인해주세요.',
                });
        }
    }
    async getUserById(id) {
        return this.userRepository.findBy({ id: id });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map