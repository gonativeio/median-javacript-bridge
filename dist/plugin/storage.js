"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const localpreferences_1 = __importDefault(require("./localpreferences"));
const storage = {
    app: localpreferences_1.default.nonpersistent,
    cloud: localpreferences_1.default.persistent,
    filesystem: localpreferences_1.default.filesystem,
};
exports.default = storage;
//# sourceMappingURL=storage.js.map