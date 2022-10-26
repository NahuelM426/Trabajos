import User , {IUser} from "../models/User"
import { json, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import config from "../config/config";
import Roles from "../models/Roles";
import { copySync } from "fs-extra";


function createToken(user: IUser) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
      expiresIn: 86400
    });
  }


export async function signUp(req: Request, res: Response): Promise<Response> {
    const { email, password,roles } = req.body;
    console.log("SignUP", email)

    if (!req.body.email || !req.body.password) {
        return res
            .status(405)
            .json({ msg: "Por favor colocar email y clave " });
    }

    const user = await User.findOne({ email });

    console.log(user)
    if (user) {
        return res.status(400).json({ msg: "El usario existe" })
    }
    const newUser = new User({
        email: email,
        password: password
    });

    if(roles){
        const ListaRoles = await Roles.find({name:{$in: roles}})
        newUser.roles = ListaRoles.map(role => role._id);
    }else{
        const role = await Roles.findOne({name:'user'})
        newUser.roles = [role?._id]
    }

    await newUser.save();
    console.log(newUser)
    return res.status(200).json(newUser)
}

export async function signIn(req: Request, res: Response): Promise<Response> {

    console.log("body",req.body)
    
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ msg: "Por Favor Envía tu correo electrónico y contraseña" });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: "El Usuario No Existe" });
    }

    const isMatch = await user.comparePassword(req.body.password);

    if (isMatch) {
        return res.status(400).json({ token: createToken(user)});
    }

    return res.status(401).json({
        msg: "Clave Inconrrecta"
    });
}