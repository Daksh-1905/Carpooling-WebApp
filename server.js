import express from "express";
import morgan from "morgan";
import cors from 'cors'
import bodyParser  from "body-parser";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoutes.js'



// Configuring dotenv(global variables)
dotenv.config();

//database connection
connectDb();

//rest object
const app=express();


//Routes
app.use('/api/v1/auth',authRoutes);


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