import { Router } from 'express'
const router = Router();

import { crearPileta, getTrabajos, crearTrabajo, getTrabajosId, delateTrabajo,crearTrabajoConFotos } from '../controllers/trabajo.contoller'

import multer from '../libs/multer'

router.route('/trabajos')
    .get(getTrabajos)
    .post(multer.single('image'), crearTrabajo)
router.route('/array')
    .post(multer.array('imagenes'), crearTrabajoConFotos)
    
router.route('/trabajos/:id')
    .get(getTrabajosId)
    .delete(delateTrabajo)
export default router;