
//IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/user.js'
import eventRoute from './routes/event.js'

//START APP 
const app = express();

app.use('/events', eventRoute)

 
app.use(cors());


// CREDS for DB Connection
const CONNECTION_URL = ""
const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://jay2:jay@cluster0.amnj6.mongodb.net/WA?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(()=> app.listen(PORT, () => console.log('Sever up')))
    .catch( (error)=> console.log(error.message));
