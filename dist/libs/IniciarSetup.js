"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearRoles = void 0;
const Roles_1 = __importDefault(require("../models/Roles"));
const CrearRoles = async () => {
    try {
        const count = await Roles_1.default.estimatedDocumentCount();
        if (count > 0)
            return;
        const values = await Promise.all([
            new Roles_1.default({ name: 'user' }).save(),
            new Roles_1.default({ name: 'moderador' }).save(),
            new Roles_1.default({ name: 'admin' }).save()
        ]);
        console.log(values);
    }
    catch (error) {
        console.error(error);
    }
};
exports.CrearRoles = CrearRoles;
