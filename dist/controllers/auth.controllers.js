"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const Roles_1 = __importDefault(require("../models/Roles"));
function createToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, config_1.default.jwtSecret, {
        expiresIn: 86400
    });
}
async function signUp(req, res) {
    const { email, password, roles } = req.body;
    console.log("SignUP", email);
    if (!req.body.email || !req.body.password) {
        return res
            .status(405)
            .json({ msg: "Por favor colocar email y clave " });
    }
    const user = await User_1.default.findOne({ email });
    console.log(user);
    if (user) {
        return res.status(400).json({ msg: "El usario existe" });
    }
    const newUser = new User_1.default({
        email: email,
        password: password
    });
    if (roles) {
        const ListaRoles = await Roles_1.default.find({ name: { $in: roles } });
        newUser.roles = ListaRoles.map(role => role._id);
    }
    else {
        const role = await Roles_1.default.findOne({ name: 'user' });
        newUser.roles = [role === null || role === void 0 ? void 0 : role._id];
    }
    await newUser.save();
    console.log(newUser);
    return res.status(200).json(newUser);
}
exports.signUp = signUp;
async function signIn(req, res) {
    console.log("body", req.body);
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ msg: "Please. Send your email and password" });
    }
    const user = await User_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ msg: "The User does not exists" });
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        return res.status(400).json({ token: createToken(user), msg: "Clave corresta" });
    }
    return res.status(401).json({
        msg: "Clave inconrrecta"
    });
}
exports.signIn = signIn;
