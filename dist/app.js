"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); //Me muestras mensages en consola mientras piden datos 
const IniciarSetup_1 = require("./libs/IniciarSetup");
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const app = (0, express_1.default)();
(0, IniciarSetup_1.CrearRoles)();
var cors = require('cors');
const index_1 = __importDefault(require("./routes/index"));
const trabajo_1 = __importDefault(require("./routes/trabajo"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
//settings
app.set('port', process.env.PORT || 4000);
app.use(cors());
//middleeares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
//para esta aplicación sera usado archivos publivos 
app.use('/uploads', express_1.default.static('uploads'));
//rutas configuro la ruta de donde pido los datos 
app.use('/api', index_1.default);
app.use('/pileta', trabajo_1.default);
app.use('/signup', auth_routes_1.default);
exports.default = app;
