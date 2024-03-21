const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require("./schema.js");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/data", async (req, res) => {
    const { author, email, heading, blog } = req.body;
    const newBlog = new Data({
        author,
        email,
        heading,
        blog
    });
    await newBlog.save();
    return res.json({ status: true, message: "Blog is stored in DB" });
});

app.get("/getdata", async(req,res) => {
    Data.find()
    .then(data => res.json(data))
    .catch(err => {
        console.log("err is occured")
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/blogie", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3001, () => {
            console.log("server is running");
        });
    })
    .catch(error => {
        console.error("Error connecting to database:", error);
    });
