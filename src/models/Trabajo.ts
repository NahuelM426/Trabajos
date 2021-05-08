import {Schema,model,Document, Mongoose, ObjectId} from 'mongoose'

const Trabajo= new Schema({
    tipo: String,
    fotos:[{type :Schema.Types.ObjectId,ref:"Photo"}]
})
interface ITrabajo extends Document{
    tipo: string;
    fotos: Array <object>
}


export default model<ITrabajo>('Trabajo',Trabajo);