import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//App Config
dotenv.config()
const app = express()
const port = process.env.PORT || 8001


//Middlewares 

//DB config

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!'));

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))