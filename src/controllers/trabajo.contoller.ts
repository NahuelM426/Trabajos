
import { Request, Response } from 'express'
import Trabajo from '../models/Trabajo'
import Foto from '../models/Fotos'
import { ObjectId } from 'mongoose';



export async function getTrabajos(req: Request, res: Response): Promise<Response> {
    const trabajo = await Trabajo.find();
    return res.json(trabajo);
}
// Metodo que resuelve el traer todas las imaguenes de un solo trabajo
export async function getTrabajosId(req: Request, res: Response): Promise<Response> {

    const TrabajoB: any = await Trabajo.findById(req.params.id);

    const fotos = await Promise.all(TrabajoB.fotos.map(async (x: number) => {
        return { foto: await Foto.findById(x) }
    }));
    console.log("foto", fotos)
    return res.json({
        message: 'Se Encontro',
        TrabajoB,
        fotos
    });
}

export async function crearTrabajoConFotos(req: Request, res: Response): Promise<Response> {
    console.log("body", req.body);
    console.log("file", req.files)
    
    const { descripcion } = req.body
    const { titulo } = req.body
    const { tipo } = req.body
    
    const arrayfile: any = req.files
    
    console.log("req.body", req.body)
    console.log("body", req.body.titulo)
    
    console.log('tipo', tipo);
    
    console.log('titulo', titulo);
    
    const newTrabajo = {
        tipo: tipo,
        titulo: titulo,
        descripcion: descripcion,
        fotos: []
    }
    const trabajo = new Trabajo(newTrabajo);
    
    const arrayFotos = await Promise.all(arrayfile.map(async (x:any) => {
        const newFoto ={
            filePath: x.path,
            trabajo: {}
        }
        const foto = new Foto(newFoto);
        foto.trabajo = trabajo.id;
        trabajo.fotos.push(foto)
        
        await foto.save();
        return { foto }
    }));
    
    console.log("fotosP",arrayFotos)
    console.log("trabajo",trabajo)
    
    await trabajo.save();

    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    })
}

export async function delateTrabajo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const trabajo = await Trabajo.findByIdAndRemove(id);
    return res.json({
        message: 'Trabajo Eliminada',
        trabajo
    });
}

// Metos de pruebas
export async function crearPileta(req: Request, res: Response): Promise<Response> {
    const { tipo } = req.body
    console.log('body', req.body)
    console.log('tipo', tipo);
    const newTrabajo = {
        tipo: tipo,
        fotos: []
    }
    
    const trabajo = new Trabajo(newTrabajo);
    
    await trabajo.save();
    
    console.log('trabajo', trabajo)
    
    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    })
    
}

export async function crearTrabajo(req: Request, res: Response): Promise<Response> {
    
    const { descripcion } = req.body
    const { titulo } = req.body
    const { tipo } = req.body
    
    console.log("req.body", req.body)
    console.log("body", req.body.titulo)
    
    console.log('tipo', tipo);
    
    console.log('titulo', titulo);
    
    console.log('descripcion', descripcion);
    
    const newTrabajo = {
        tipo: tipo,
        titulo: titulo,
        descripcion: descripcion,
        fotos: []
    }
    const newPhoto = {
        filePath: req.file.path,
        trabajo: {}
    };
    
    const foto = new Foto(newPhoto);
    
    const trabajo = new Trabajo(newTrabajo);
    
    foto.trabajo = trabajo.id;
    
    trabajo.fotos.push(foto)
    
    console.log('trabajo', trabajo)
    console.log('foto', foto)
    await trabajo.save();
    await foto.save();
 
    return res.json({
        message: 'se guardo la Trabajo ',
        trabajo
    })
    
}