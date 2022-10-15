import { Router } from "express";
const router = Router()

import *as authCtrl from '../controllers/auth.controllers'

router.route('/signup')
    .post(authCtrl.signUp)

router.route('/signin')
    .post(authCtrl.signIn)

export default router;