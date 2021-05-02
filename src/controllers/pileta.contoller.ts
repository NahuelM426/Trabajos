
import {Request,Response} from 'express'
import Pileta from '../models/Piletas'



export async function  getPiletas (req:Request, res:Response): Promise<Response>{
   const pileta =  await Pileta.find();
   return res.json(pileta);
}

export async function crearPileta(req:Request,res:Response):Promise<Response> {
    const {tipo} =  req.body
    console.log('body',req.body)
    console.log('tipo',tipo);
    const newPileta = {
        tipo: tipo,
        fotos:[]
    }
 
    const pileta = new Pileta (newPileta);

    //await pileta.save();

    console.log('pileta',pileta)

    return res.json({
        message: 'se guardo la Pilita ',
        pileta
    })
    
}







