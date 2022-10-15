import {Schema,model,Document, Mongoose, ObjectId} from 'mongoose'

const Roles= new Schema({
    name: String,

}, {
    versionKey: false
})
interface IRoles extends Document{
    name: string;
}


export default model<IRoles>('Roles',Roles);