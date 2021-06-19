"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePhoto = exports.delatePhoto = exports.createFotoid = exports.createFoto = exports.getPhoto = exports.getPhotos = void 0;
const Fotos_1 = __importDefault(require("../models/Fotos"));
const Trabajo_1 = __importDefault(require("../models/Trabajo"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function getPhotos(req, res) {
    const fotos = await Fotos_1.default.find();
    console.log(fotos);
    return res.json(fotos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    const { id } = req.params;
    const photo = await Fotos_1.default.findById(id);
    const imaguen = photo === null || photo === void 0 ? void 0 : photo.filePath;
    console.log("ima", imaguen);
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function createFoto(req, res) {
    const { title } = req.body;
    console.log("req.body", req.body);
    console.log("body", req.body.title);
    console.log("file", req.file);
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
async function createFotoid(req, res) {
    const { title } = req.body;
    const { id } = req.params;
    console.log("req.body", req.body);
    console.log("body", req.body.title);
    console.log("file", req.params);
    const newPhoto = {
        title: title,
        filePath: req.file.path,
    };
    var trabajoBus = await Trabajo_1.default.findById(id);
    console.log('trabajoBuscado', trabajoBus);
    const photo = new Fotos_1.default(newPhoto);
    console.log('trabajoBuscadoFoto', trabajoBus === null || trabajoBus === void 0 ? void 0 : trabajoBus.fotos);
    photo.trabajo = trabajoBus === null || trabajoBus === void 0 ? void 0 : trabajoBus.id;
    trabajoBus === null || trabajoBus === void 0 ? void 0 : trabajoBus.fotos.push(photo);
    console.log(photo);
    await photo.save();
    await (trabajoBus === null || trabajoBus === void 0 ? void 0 : trabajoBus.save());
    return res.json({
        message: 'se guardo la foto ',
        photo
    });
}
exports.createFotoid = createFotoid;
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
