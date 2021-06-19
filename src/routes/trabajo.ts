import {Router} from 'express'
const router = Router();

import {crearPileta, getTrabajos,crearTrabajo,getTrabajosId} from '../controllers/pileta.contoller'

import multer from '../libs/multer'

router.route('/piletas')
    .get(getTrabajos)
    .post(multer.single('image'),crearTrabajo)
router.route('/piletas/:id')
    .get(getTrabajosId)
export default router;