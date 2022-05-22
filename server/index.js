
//IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

//Routes
import userRoutes from './routes/user.js'
import eventRoute from './routes/event.js'

//START APP 
const app = express();

dotenv.config(); //Config

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));

// Routes

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
  next();
  });

app.use('/user', userRoutes)
app.use('/event', eventRoute)


// CREDS for DB Connection
const CONNECTION_URL = ""
const PORT = process.env.PORT || 8080;

mongoose.connect("mongodb+srv://jay2:jay@cluster0.amnj6.mongodb.net/WA?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(()=> app.listen(PORT, () => console.log('Sever up')))
    .catch( (error)=> console.log(error.message));
