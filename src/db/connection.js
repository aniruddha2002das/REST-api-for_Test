const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async (DATABASE_URL) => {
    // return mongoose.connect(DATABASE_URL)
    // .then(() => {
    //     console.log("Connection successful with database");
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Connection successful with database");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;