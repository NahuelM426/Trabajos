"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.delatePhoto = exports.createFoto = exports.getPhoto = exports.getPhotos = void 0;
const Fotos_1 = __importDefault(require("../models/Fotos"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getPhotos(req, res) {
    const fotos = await Fotos_1.default.find();
    return res.json(fotos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await Fotos_1.default.findById(id);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createFoto(req, res) {
    const { title } = req.body;
    console.log(req.file.path);
    const newPhoto = {
        title: title,
        filePath: req.file.path
    };
    const photo = new Fotos_1.default(newPhoto);
    await photo.save();
    console.log(photo);
    return res.json({
        message: 'se guardo la foto ',
        photo
    });
}
exports.createFoto = createFoto;
async function delatePhoto(req, res) {
    const { id } = req.params;
    const photo = await Fotos_1.default.findByIdAndRemove(id);
    if (photo) {
        fs_extra_1.default.unlink(path_1.default.resolve(photo.filePath));
    }
    return res.json({
        message: 'Foto Eliminada',
        photo
    });
}
exports.delatePhoto = delatePhoto;
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Fotos_1.default.findByIdAndUpdate(id, {
        title,
        description
    });
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}
exports.updatePhoto = updatePhoto;
