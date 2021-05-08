
import {Request,Response} from 'express'
import Trabajo from '../models/Trabajo'
import Foto from '../models/Fotos'



export async function  getPiletas (req:Request, res:Response): Promise<Response>{
   const trabajo =  await Trabajo.find();
   return res.json(trabajo);
}

export async function crearPileta(req:Request,res:Response):Promise<Response> {

    
    const {tipo} =  req.body
    console.log('body',req.body)
    console.log('tipo',tipo);
    const newTrabajo = {
        tipo: tipo,
        fotos:[]
    }
 
    const trabajo = new Trabajo (newTrabajo);

    await trabajo.save();

    console.log('trabajo',trabajo)

    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    })
    
}

export async function crearTrabajo(req:Request,res:Response):Promise<Response> {
    
    const{title} = req.body
    const {tipo} =  req.body

    console.log("req.body",req.body)
    console.log("body",req.body.title)
    
    console.log('tipo',tipo);
    
    console.log('tipo',title);
    

    const newTrabajo = {
        tipo: tipo,
        fotos:[]
    }
    const newPhoto={
        title:title,
        filePath:req.file.path,
        trabajo:{}
    };
 
    const foto = new Foto(newPhoto);

    const trabajo = new Trabajo (newTrabajo);
    
    foto.trabajo =trabajo.id;

    trabajo.fotos.push(foto)

    console.log('trabajo',trabajo)
    console.log('foto',foto)
    // await trabajo.save();
    // await foto.save();



    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    })
    
}







