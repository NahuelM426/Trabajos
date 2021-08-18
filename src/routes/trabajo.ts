import {Router} from 'express'
const router = Router();

import {crearPileta, getTrabajos,crearTrabajo,getTrabajosId, delateTrabajo} from '../controllers/trabajo.contoller'

import multer from '../libs/multer'

router.route('/piletas')
    .get(getTrabajos)
    .post(multer.single('image'),crearTrabajo)
router.route('/piletas/:id')
    .get(getTrabajosId)
    .delete(delateTrabajo)
export default router;