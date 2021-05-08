import {Router} from 'express'
const router = Router();

import {crearPileta, getPiletas,crearTrabajo} from '../controllers/pileta.contoller'

import multer from '../libs/multer'

router.route('/piletas')
    .get(getPiletas)
    .post(multer.single('image'),crearTrabajo)
    
export default router;