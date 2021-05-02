"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schama = new mongoose_1.Schema({
    title: String,
    filePath: String
});
exports.default = mongoose_1.model('Photo', schama);
