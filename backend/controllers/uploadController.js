
const fs = require("fs");
const { spawn } = require('child_process');
const imageModel = require("../models/imageModel");


const uploadImageNPredict = async (req, res) =>{
    let output = '';
    let animalType = req.body.animalType
    console.log(animalType);
    const saveImage =  imageModel({
        name: req.body.name,
        img: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png",
        },
    });
    saveImage
        .save()
        .then((response) => {
            console.log("image is saved");
            // res.send('image is saved')
        })
        .catch((err) => {
            console.log(err, "error has occur");
        });
    let pyScript = ""
    if(animalType === 'cat') {
        pyScript = spawn('python', ['predict_cat.py', './uploads/' + req.file.filename]);
        console.log("ran the cat model");
    }else{
        pyScript = spawn('python', ['predict_dog.py', './uploads/' + req.file.filename]);
        console.log("ran the dog model");
    }

    pyScript.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        output = data.toString();
    });
    pyScript.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        console.log(output)
        res.send(output)
    });
    console.log("output"+output)
}

module.exports = {uploadImageNPredict}