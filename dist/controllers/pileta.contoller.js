"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearPileta = exports.getPiletas = void 0;
const Piletas_1 = __importDefault(require("../models/Piletas"));
async function getPiletas(req, res) {
    const pileta = await Piletas_1.default.find();
    return res.json(pileta);
}
exports.getPiletas = getPiletas;
async function crearPileta(req, res) {
    const { tipo } = req.body;
    console.log('body', req.body);
    console.log('tipo', tipo);
    const newPileta = {
        tipo: tipo,
        fotos: []
    };
    const pileta = new Piletas_1.default(newPileta);
    //await pileta.save();
    console.log('pileta', pileta);
    return res.json({
        message: 'se guardo la Pilita ',
        pileta
    });
}
exports.crearPileta = crearPileta;
