import {connect} from 'mongoose'

export async function startConnction(){
   await connect('mongodb://localhost/piletas-galeria',{
       useNewUrlParser:true,
       useUnifiedTopology: true
   })
   console.log("conectado a la base");
}

