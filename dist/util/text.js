"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandom = exports.hash = void 0;
const sha3_1 = require("sha3");
const hash = (text) => {
    const hasher = new sha3_1.default(256);
    hasher.update(text);
    return hasher.digest('hex');
};
exports.hash = hash;
const getRandom = (type_, length) => {
    let result = '';
    const type = type_.toLowerCase();
    length = length ? length : 32;
    let characters = '0123456789';
    if (type === 'number' || type === 'numbers') {
        characters = '0123456789';
        for (let i = 0; i < length; i++) {
            result += characters[Math.floor(Math.random() * characters.length)];
        }
        return result;
    }
    else if (type === 'alphabet' || type === 'alphabets') {
        characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < length; i++) {
            result += characters[Math.floor(Math.random() * characters.length)];
        }
        return result;
    }
    else if (type === 'alphanumeric' || type === 'all') {
        characters =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
            result += characters[Math.floor(Math.random() * characters.length)];
        }
        return result;
    }
    else {
        characters = type;
        for (let i = 0; i < length; i++) {
            result += characters[Math.floor(Math.random() * characters.length)];
        }
        return result;
    }
};
exports.getRandom = getRandom;
//# sourceMappingURL=text.js.map