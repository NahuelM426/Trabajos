"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const photo_controllers_1 = require("../controllers/photo.controllers");
const passport_1 = __importDefault(require("passport"));
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/photos')
    .get(passport_1.default.authenticate('jwt', { session: false }), photo_controllers_1.getPhotos)
    .post(multer_1.default.single('image'), photo_controllers_1.createFoto);
router.route('/prueba')
    .post(multer_1.default.array('imagenes'), photo_controllers_1.pruebaCrear);
router.route('/photos/:id')
    .get(photo_controllers_1.getPhoto)
    .delete(photo_controllers_1.delatePhoto)
    .put(photo_controllers_1.updatePhoto)
    .post(multer_1.default.single('image'), photo_controllers_1.createFotoid);
exports.default = router;
