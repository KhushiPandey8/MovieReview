import { User } from "../model/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookie from "cookie-parser"
export const Register = async(req,res) =>{
    try {
        const {name,email,pass} = req.body;
        if(!name || !email || !pass){
            return res.status(401).json({
                message:"Invalid Data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This Email Already Exist",
                success:false
            })
        }
        const hash = await bcrypt.hash(pass,16);
        await User.create({
            name,
            email,
            pass:hash
        });
        res.status(201).json({
            message:"Account Created Successfully",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}
export const Login = async(req,res)=>{
    try {
        const {email,pass} = req.body;
        if(!email || !pass){
            return res.status(401).json({
                message:"Invalid Data",
                success:false
            })
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                message:"Invalid Email and Password",
                success:false
            })
        }
        const isMatch = await bcrypt.compare(pass,user.pass);
        if(!isMatch){
            return res.status(401).json({
                message:"Invalid Email and Password",
                success:false
            })
        }
        const tokenData = {
            id:user._id,
        }
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: `Welcome back ${user.name}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully.",
        success: true
    })
}