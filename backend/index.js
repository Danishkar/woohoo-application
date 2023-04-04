require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const { spawn } = require('child_process');

const imageModel = require("./models/imageModel")

const userRoutes = require("./routes/user")
const uploadRoutes = require("./routes/upload")
const organizationRoutes = require("./routes/organization")
// express app
const app = express();

// middlewares
app.use(cors())
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})
// routes
app.use("/api/user",userRoutes)
app.use("/api", uploadRoutes)
app.use("/api", organizationRoutes)	


// connect to mongoose
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONG_URL)
    .then(()=>{
        // listen for requests
        app.listen(4000,()=>{
            console.log("connected to db,server is up and running in port",process.env.PORT)
        })
    })
    .catch((err)=>{
        console.log("error:"+ err);
    })


    
