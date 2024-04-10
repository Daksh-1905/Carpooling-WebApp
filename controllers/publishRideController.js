import PublishRide from "../models/PublishRide.js";

export const publishRideController = async(req,res)=>{
    try {
        const {source,destination,arrival,time,passenger} = req.body;
        if(!source)return res.send({error:"Source is required"});
        if(!destination)return res.send({error:"Destination is required"});
        if(!arrival)return res.send({error:"Arrival is required"});
        if(!time)return res.send({error:"Time is required"})
        if(!passenger)return res.send({error:"Passenger is required"});

        const new_ride = await PublishRide({source,destination,arrival,time,passenger}).save();
        return res.status(201).send({
            success:true,
            message:"Ride Successfully registered !!",
            new_ride
        })

    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Error in publish Ride Controller",
            error
        })
    }
}