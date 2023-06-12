import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//App Config
dotenv.config()
const app = express()

//Middlewares 

//DB config
mongoose.connect(process.env.CONNECTION_URL)

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.get('/tinder/card', (req, res) => {

    Cards.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});


//Listener
app.listen(process.env.PORT, () => console.log(`listening on localhost: ${process.env.PORT}`))