"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTrabajo = exports.crearPileta = exports.delateTrabajo = exports.crearTrabajoConFotos = exports.getTrabajosId = exports.getTrabajos = void 0;
const Trabajo_1 = __importDefault(require("../models/Trabajo"));
const Fotos_1 = __importDefault(require("../models/Fotos"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
async function getTrabajos(req, res) {
    const trabajo = await Trabajo_1.default.find();
    return res.json(trabajo);
}
exports.getTrabajos = getTrabajos;
// Metodo que resuelve el traer todas las imaguenes de un solo trabajo
async function getTrabajosId(req, res) {
    const TrabajoB = await Trabajo_1.default.findById(req.params.id);
    const fotos = await Promise.all(TrabajoB.fotos.map(async (x) => {
        return { foto: await Fotos_1.default.findById(x) };
    }));
    console.log("foto", fotos);
    return res.json({
        message: 'Se Encontro',
        TrabajoB,
        fotos
    });
}
exports.getTrabajosId = getTrabajosId;
async function crearTrabajoConFotos(req, res) {
    console.log("body", req.body);
    console.log("file", req.files);
    const { descripcion } = req.body;
    const { titulo } = req.body;
    const { tipo } = req.body;
    const arrayfile = req.files;
    console.log("req.body", req.body);
    console.log("body", req.body.titulo);
    console.log('tipo', tipo);
    console.log('titulo', titulo);
    const newTrabajo = {
        tipo: tipo,
        titulo: titulo,
        descripcion: descripcion,
        fotos: []
    };
    const trabajo = new Trabajo_1.default(newTrabajo);
    const arrayFotos = await Promise.all(arrayfile.map(async (x) => {
        const newFoto = {
            filePath: x.path,
            trabajo: {}
        };
        const foto = new Fotos_1.default(newFoto);
        foto.trabajo = trabajo.id;
        trabajo.fotos.push(foto);
        await foto.save();
        return { foto };
    }));
    console.log("fotosP", arrayFotos);
    console.log("trabajo", trabajo);
    await trabajo.save();
    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    });
}
exports.crearTrabajoConFotos = crearTrabajoConFotos;
async function delateTrabajo(req, res) {
    const { id } = req.params;
    const TrabajoB = await Trabajo_1.default.findById(id);
    const fotos = await Promise.all(TrabajoB.fotos.map(async (x) => {
        const photo = await Fotos_1.default.findByIdAndRemove(x);
        if (photo) {
            fs_extra_1.default.unlink(path_1.default.resolve(photo.filePath));
        }
        return { photo };
    }));
    const trabajo = await Trabajo_1.default.findByIdAndRemove(id);
    console.log("TrabajoB", TrabajoB);
    console.log("foto", fotos);
    return res.json({
        message: 'Trabajo Eliminada',
        trabajo,
        fotos
    });
}
exports.delateTrabajo = delateTrabajo;
// Metos de pruebas
async function crearPileta(req, res) {
    const { tipo } = req.body;
    console.log('body', req.body);
    console.log('tipo', tipo);
    const newTrabajo = {
        tipo: tipo,
        fotos: []
    };
    const trabajo = new Trabajo_1.default(newTrabajo);
    await trabajo.save();
    console.log('trabajo', trabajo);
    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    });
}
exports.crearPileta = crearPileta;
async function crearTrabajo(req, res) {
    var _a;
    const { descripcion } = req.body;
    const { titulo } = req.body;
    const { tipo } = req.body;
    console.log("req.body", req.body);
    console.log("body", req.body.titulo);
    console.log('tipo', tipo);
    console.log('titulo', titulo);
    console.log('descripcion', descripcion);
    const newTrabajo = {
        tipo: tipo,
        titulo: titulo,
        descripcion: descripcion,
        fotos: []
    };
    const newPhoto = {
        filePath: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path,
        trabajo: {}
    };
    const foto = new Fotos_1.default(newPhoto);
    const trabajo = new Trabajo_1.default(newTrabajo);
    foto.trabajo = trabajo.id;
    trabajo.fotos.push(foto);
    console.log('trabajo', trabajo);
    console.log('foto', foto);
    await trabajo.save();
    await foto.save();
    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    });
}
exports.crearTrabajo = crearTrabajo;
