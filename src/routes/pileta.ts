import {Router} from 'express'
const router = Router();

import {crearPileta, getPiletas} from '../controllers/pileta.contoller'

router.route('/piletas')
    .get(getPiletas)
    .post(crearPileta)
    
export default router;