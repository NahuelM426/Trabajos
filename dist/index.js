"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const datebase_1 = require("./datebase");
async function main() {
    (0, datebase_1.startConnction)();
    await app_1.default.listen(app_1.default.get('port'));
    console.log('Puerto de Servidor', app_1.default.get('port'));
}
main();
