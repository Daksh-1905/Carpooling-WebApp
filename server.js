import express from "express";
import morgan from "morgan";
import cors from 'cors'
import bodyParser  from "body-parser";
import dotenv from "dotenv";

//auth routes


//dotenv
dotenv.config();


//rest object
const app=express();




//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan(('dev')));


app.get("/",(req,res)=>{
    res.send("Welcome to our bot.")
})

app.listen(8080,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})