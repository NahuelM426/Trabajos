"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Trabajo = new mongoose_1.Schema({
    tipo: String,
    fotos: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Photo" }]
});
exports.default = mongoose_1.model('Trabajo', Trabajo);
