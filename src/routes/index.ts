import {Router} from 'express'
const router = Router();

import {createFoto,getPhotos,getPhoto,delatePhoto, updatePhoto} from '../controllers/photo.controllers'

import multer from '../libs/multer'

router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createFoto)

router.route('/photos/:id')
    .get(getPhoto)
    .delete(delatePhoto)
    .put(updatePhoto)

export default router;