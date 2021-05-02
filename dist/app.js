"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); //Me muestras mensages en consola mientras piden datos 
const path_1 = __importDefault(require("path")); //node te dice la ruta donde esta guardado el archivo 
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
const pileta_1 = __importDefault(require("./routes/pileta"));
//settings
app.set('port', process.env.PORT || 4000);
//middleeares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
//rutas configuro la ruta de donde pido los datos 
app.use('/api', index_1.default);
app.use('/pileta', pileta_1.default);
//para esta aplicación sera usado archivos publivos 
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
