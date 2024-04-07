import { comparePassword, hashPassword } from "../helper/authhelper.js";
import usermodel from "../models/usermodel.js";
import JWT from 'jsonwebtoken';


export const registerController = async(req,res)=>{
    try {
        const {Name,Email,Password} = req.body;
        if(!Name)return res.send({error:'Name is required'})
        if(!Email)return res.send({error:'Email is required'})
        if(!Password)return res.send({error:'Password is required'})

        //if existing user
        const existingUser = await usermodel.findOne({Email});
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"User already register !! "
            })
        }

        const hashedPassword = await hashPassword(Password)

        const new_user = await usermodel({Name,Email,Password:hashedPassword}).save();
        return res.status(201).send({
            success:true,
            message:"User succesfully registered !!"
        })

    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Error in registerController",
            error
        })
    }
}


export const loginController = async(req,res)=>{
    try {
        const {Email,Password} = req.body;
        if(!Email)return res.send({error:'Email is required'})
        if(!Password)return res.send({error:'Password is required'})

        //if existing user
        const existingUser = await usermodel.findOne({Email});
        if(!existingUser){
            return res.status(404).send({
                success:false,
                message:"User Not register !! "
            })
        }
        const match = await comparePassword(Password,user.Password);
        if(!match){
            return res.status(404).send({
                success:false,
                message:"Invalid Password"
            })
        }
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        return res.status(201).send({
            success:true,
            message:"User succesfully registered !!",
            user:{
                _id:user._id,
                Name:user.Name,
                Email:user.Email,
            },
            token
        })
    } catch (error) {
        
    }
}

export const logoutController = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
