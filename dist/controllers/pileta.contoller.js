"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTrabajo = exports.crearPileta = exports.getTrabajosId = exports.getTrabajos = void 0;
const Trabajo_1 = __importDefault(require("../models/Trabajo"));
const Fotos_1 = __importDefault(require("../models/Fotos"));
async function getTrabajos(req, res) {
    const trabajo = await Trabajo_1.default.find();
    return res.json(trabajo);
}
exports.getTrabajos = getTrabajos;
async function getTrabajosId(req, res) {
    const TrabajoB = await Trabajo_1.default.findById(req.params.id);
    const fotos = await Promise.all(TrabajoB.fotos.map(async (x) => {
        return { foto: await Fotos_1.default.findById(x) };
    }));
    console.log("foto", fotos);
    return res.json({
        message: 'Se Encontro',
        fotos
    });
}
exports.getTrabajosId = getTrabajosId;
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
    const { title } = req.body;
    const { tipo } = req.body;
    console.log("req.body", req.body);
    console.log("body", req.body.title);
    console.log('tipo', tipo);
    console.log('tipo', title);
    const newTrabajo = {
        tipo: tipo,
        fotos: []
    };
    const newPhoto = {
        title: title,
        filePath: req.file.path,
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
