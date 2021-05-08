import {Schema,model,Document, Mongoose, ObjectId} from 'mongoose';


const Photo = new Schema({
    title:String,
    filePath:String,
    trabajo: { type: Schema.Types.ObjectId, ref: "Trabajo"}
});

interface IPhoto extends Document{
    title:string;
    filePath:string
    trabajo:object
}


export default model<IPhoto>('Photo',Photo);