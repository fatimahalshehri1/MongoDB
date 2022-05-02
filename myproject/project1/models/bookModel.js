const mongoose=require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Schema=mongoose.Schema;

const bookSchema=new Schema({
    title:{
        type:string,
        required:true
    },
    authore:{
        type:string,
        required:true

    },
    description:{
        type:string,
    },
});
module.experts=mongoose.model("book",bookSchema);