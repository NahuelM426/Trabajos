"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnction = void 0;
const mongoose_1 = require("mongoose");
async function startConnction() {
    await mongoose_1.connect('mongodb://localhost/piletas-galeria', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("conectado a la base");
}
exports.startConnction = startConnction;
