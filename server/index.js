const express=require('express')
const app=express();
const bodyparser=require('body-parser')
const cors=require('cors');
require('dotenv').config();
const routes=require('./Router/routes')
const mongoose=require('mongoose')



// Connect to MongoDB
mongoose.connect('mongodb+srv://bjgurung2000:bjgurung2000@cluster0.mrfvnyr.mongodb.net/TaskManagement');
const db= mongoose.connection;
db.on('open',()=>console.log("Connected to MongoDB"));
db.on('error',()=>console.log("error in Connected to MongoDB"));
db.on('close',()=>console.log("Connection closed to MongoDB"));


  //setup middleware
  app.use(bodyparser.json());
  app.use(cors());
  //Routes
  app.use('/user', routes)
  app.use('/taskinput', routes)
  app.use('/task', routes)



app.listen('80', ()=>{
    console.log(`Server is running at : 80` )
})