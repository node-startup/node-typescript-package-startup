"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.username = exports.getLocalTime = void 0;
exports.getLocalTime = function () {
    return new Date().toLocaleString();
};
exports.username = function (firstname, lastname) { return firstname + lastname; };
//# sourceMappingURL=getLocalTime.js.map