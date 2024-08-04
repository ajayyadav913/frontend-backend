// require('dotenv').config({path:'./env'})
import dotenv  from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path:'./env'
})

// import mongoose from "mongoose"
// import { DB_NAME } from "./constants";
/*
import express from "express"

const app = express()


(async()=>{
try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on(error,()=>{
        console.log("ERROR:",error)
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening port: ${process.env.PORT}`)
    })

} catch (error) {
    console.error("ERROR:",error)
    throw err
}


})()*/

connectDb()