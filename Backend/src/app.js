const express = require('express');
const multer = require('multer');   // this is used to handle file uploads in express ( it is a middleware that helps to handle multipart/form-data, which is used for uploading files)
const uploadFile = require('../services/storage.service');
const postModel = require('../models/post.model');
const cors = require('cors');

const app = express();
app.use(cors()); // middleware this is used to enable CORS (Cross-Origin Resource Sharing) in express, which allows the frontend to make requests to the backend from a different origin
app.use(express.json());  // this is used to parse the incoming request body in JSON format

const upload = multer({ storage: multer.memoryStorage() });

app.post('/create-post',upload.single("image"), async (req,res) =>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);
    const post = await postModel.create({
        image: result.url,
        caption : req.body.caption
    })
    return res.status(201).json({
        message: "post created successfully",
        imageUrl: result.url,
        post
    })
})


app.get("/posts", async (req, res) =>{

    const posts = await postModel.find()
    return res.status(200).json({
        message: "posts fetched successfully",
        posts
    })
})


module.exports = app;