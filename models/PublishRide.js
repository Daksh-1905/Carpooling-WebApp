import mongoose from "mongoose"

const rideSchema = new mongoose.Schema({
    source: {
        type:String,
        required:[true,"Source is Required"]
    },
    destination: {
        type:String,
        required:[true,"Destination is required"]
    },
    arrival: {
        type:Date,
        required:[true,"Date is required"]
    },
    time: {
        type:Date,
        required: [true,"Time is required"]
    },
    passenger: {
        type:Number,
        required:[true,"Passengers are required"]
    }
})

export default mongoose.model('rides',rideSchema);