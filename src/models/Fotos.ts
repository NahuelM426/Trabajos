import {Schema,model,Document} from 'mongoose';

const schama = new Schema({
    title:String,
    filePath:String
});

interface IPhoto extends Document{
    title:string;
    filePath:string
}


export default model<IPhoto>('Photo',schama);