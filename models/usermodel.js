import mongoose, { mongo } from "mongoose"

const userSchema = new userSchema({
    Name: {
        type:String,
        required:[true,"Username is Required"]
    },
    Email: {
        type:String,
        required:[true,"Email is required"]
    },
    Password: {
        type:String,
        required:[true,"Password is required"]
    },
})

export default mongoose.model('user',userSchema);