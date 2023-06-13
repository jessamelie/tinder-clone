import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cards from "./dbCards.js"; 
import cors from "cors"; 

//App Config
dotenv.config()
const app = express()

//Middlewares 
app.use(express.json())
app.use(cors({
    credentials : true,
    origin: 'http://localhost:5173'
})) 


//DB config
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.get('/tinder/cards', async (req, res) => {
    try {
      const data = await Cards.find();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });


//Listener
app.listen(process.env.PORT, () => console.log(`listening on localhost: ${process.env.PORT}`))