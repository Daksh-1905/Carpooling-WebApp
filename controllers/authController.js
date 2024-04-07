import { hashPassword } from "../helper/authhelper.js";
import usermodel from "../models/usermodel.js";


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

        const new_user = await usermodel({Name,Email,Password:hashedPassword}).save()
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
        
    } catch (error) {
        
    }
}

export const logoutController = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
