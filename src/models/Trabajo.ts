import {Schema,model,Document, Mongoose, ObjectId} from 'mongoose'

const Trabajo= new Schema({
    tipo: String,
    titulo:String,
    descripcion:String,
    fotos:[{type :Schema.Types.ObjectId,ref:"Photo"}],
}
)
interface ITrabajo extends Document{
    tipo: string;
    titulo:string,
    descripcion:string,

    fotos: Array <object>
}


export default model<ITrabajo>('Trabajo',Trabajo);