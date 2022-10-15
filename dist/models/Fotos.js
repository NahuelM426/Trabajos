"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Photo = new mongoose_1.Schema({
    filePath: String,
    trabajo: { type: mongoose_1.Schema.Types.ObjectId, ref: "Trabajo" }
});
exports.default = (0, mongoose_1.model)('Photo', Photo);
