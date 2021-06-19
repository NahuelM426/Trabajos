"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Photo = new mongoose_1.Schema({
    title: String,
    filePath: String,
    trabajo: { type: mongoose_1.Schema.Types.ObjectId, ref: "Trabajo" }
});
exports.default = mongoose_1.model('Photo', Photo);
