import {Router} from 'express'
const router = Router();

import {createFoto,getPhotos,getPhoto,delatePhoto, updatePhoto, createFotoid,pruebaCrear} from '../controllers/photo.controllers'
import passport from 'passport';

import multer from '../libs/multer'

router.route('/photos')
    .get(passport.authenticate('jwt',{session:false}),getPhotos)
    .post(multer.single('image'), createFoto)

router.route('/prueba')
    .post(multer.array('imagenes'),pruebaCrear)

router.route('/photos/:id')
    .get(getPhoto)
    .delete(delatePhoto)
    .put(updatePhoto)
    .post(multer.single('image'), createFotoid)
export default router;