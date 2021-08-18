"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); //Me muestras mensages en consola mientras piden datos 
const app = express_1.default();
var cors = require('cors');
const index_1 = __importDefault(require("./routes/index"));
const trabajo_1 = __importDefault(require("./routes/trabajo"));
//settings
app.set('port', process.env.PORT || 4000);
app.use(cors());
//middleeares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//para esta aplicación sera usado archivos publivos 
app.use('/uploads', express_1.default.static('uploads'));
//rutas configuro la ruta de donde pido los datos 
app.use('/api', index_1.default);
app.use('/pileta', trabajo_1.default);
exports.default = app;
