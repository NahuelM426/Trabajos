import {Schema,model,Document} from 'mongoose'

const schama= new Schema({
    tipo:String,
    fotos:Array
})
interface IPileta extends Document{
    tipo:string;
    fotos:[object]
}


export default model<IPileta>('Pileta',schama);