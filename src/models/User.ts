import { model, Schema, Document } from "mongoose";
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    email: string;
    password: string;
    roles:Array <object>;
    comparePassword: (password: string) => Promise<Boolean>
};

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    roles:[{type :Schema.Types.ObjectId,ref:"Roles"}],
        versionKey:false
});


userSchema.pre<IUser>("save", async function (next) {

    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<Boolean>  {
    return bcrypt.compare(password, this.password);
};

export default model<IUser>("User", userSchema);
