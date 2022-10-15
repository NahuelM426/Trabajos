import express from 'express';
import morgan from 'morgan' //Me muestras mensages en consola mientras piden datos 
import path from 'path' //node te dice la ruta donde esta guardado el archivo 
import {CrearRoles } from './libs/IniciarSetup';
import passport from 'passport'
import passportMiddleware from './middlewares/passport';

const  app = express(); 
CrearRoles();

var cors = require('cors');
import indexrouter from './routes/index'
import trabajorouter from './routes/trabajo'
import auth from './routes/auth.routes'
//settings

app.set('port',process.env.PORT || 4000);
app.use(cors())
//middleeares

app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);


//para esta aplicación sera usado archivos publivos 
app.use('/uploads',express.static('uploads'));

//rutas configuro la ruta de donde pido los datos 
app.use('/api',indexrouter);
app.use('/pileta',trabajorouter)
app.use('/signup',auth)


export default app;