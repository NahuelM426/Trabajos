import {Request,Response} from 'express'
import Fotos from '../models/Fotos'
import Trabajo from '../models/Trabajo'
import path from 'path'
import fs from 'fs-extra'


export async function  getPhotos (req:Request, res:Response): Promise<Response>{
   const fotos =  await Fotos.find();
   console.log(fotos);

   return res.json(fotos);
}

export async function getPhoto(req:Request , res:Response): Promise<Response>{
    const {id} = req.params;
    const photo = await Fotos.findById(id);
    const imaguen = photo?.filePath
    console.log("ima", imaguen)
    return res.json(photo);
}

export async function createFoto (req: Request , res: Response): Promise<Response>{
    
    const{title} = req.body
    console.log("req.body",req.body)
    console.log("body",req.body.title)
    console.log("file",req.file)
    

    const newPhoto={
        title:title,
        filePath:req.file.path
    };

    const photo = new Fotos(newPhoto);

    await photo.save();
    
    console.log(photo)
    return res.json({
        message: 'se guardo la foto ',
        photo
    })
}
export async function createFotoid (req: Request , res: Response): Promise<Response>{
    
    const{title} = req.body
    const{id}=req.params
    console.log("req.body",req.body)
    console.log("body",req.body.title)
    console.log("file",req.params)
    
    
    const newPhoto={
        title:title,
        filePath:req.file.path,
    };

    var trabajoBus = await Trabajo.findById(id);

    console.log('trabajoBuscado',trabajoBus);
    
    const photo = new Fotos(newPhoto);
    console.log('trabajoBuscadoFoto',trabajoBus?.fotos);
    
    photo.trabajo= trabajoBus?.id;
    
    trabajoBus?.fotos.push(photo)
    
    console.log(photo)
    
    await photo.save();
    await trabajoBus?.save();
    
    return res.json({
        message: 'se guardo la foto ',
        photo
    })
}

export async function delatePhoto(req:Request , res:Response): Promise<Response>{
    const {id} = req.params;
    const photo = await Fotos.findByIdAndRemove(id);
    if(photo){
        fs.unlink(path.resolve(photo.filePath))
    }
    return res.json({
        message:'Foto Eliminada',
        photo
    });
}

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Fotos.findByIdAndUpdate(id, {
        title,
        description
    });
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}

