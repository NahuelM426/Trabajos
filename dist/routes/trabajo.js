"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const trabajo_contoller_1 = require("../controllers/trabajo.contoller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/trabajos')
    .get(trabajo_contoller_1.getTrabajos)
    .post(multer_1.default.single('image'), trabajo_contoller_1.crearTrabajo);
router.route('/array')
    .post(multer_1.default.array('imagenes'), trabajo_contoller_1.crearTrabajoConFotos);
router.route('/trabajos/:id')
    .get(trabajo_contoller_1.getTrabajosId)
    .delete(trabajo_contoller_1.delateTrabajo);
exports.default = router;
