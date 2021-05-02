"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schama = new mongoose_1.Schema({
    tipo: String,
    fotos: Array
});
exports.default = mongoose_1.model('Pileta', schama);
