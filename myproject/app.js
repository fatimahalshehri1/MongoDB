const express =require('express');
const req = require('express/lib/request');
const mongoose=require('mongoose');
const Bookrouter=require('./routes/bookRoutes');

const app=("express");

app.get(express.json());
app.use('/books',BookRouter);

mongoose.connect('mongodb+srv://fatimah_alshehri:qYqZVtwfivHpdiuR@cluster0.eujyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{console.log('connected to the database')})
.catch(()=>console.log('error'));





app.listen(8000,()=>{
    console.log("server has started at port 8000");
});