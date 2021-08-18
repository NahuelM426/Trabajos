"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const pileta_contoller_1 = require("../controllers/pileta.contoller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/piletas')
    .get(pileta_contoller_1.getTrabajos)
    .post(multer_1.default.single('image'), pileta_contoller_1.crearTrabajo);
router.route('/piletas/:id')
    .get(pileta_contoller_1.getTrabajosId);
exports.default = router;
