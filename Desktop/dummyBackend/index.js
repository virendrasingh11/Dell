import express from "express";
import connectDB from "./dbConnection/config.js";
import { Post } from "./post.model.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})
app.post("/post", async (req, res) => {
    let post = new Post({
        title: "Jecrc",
        description: "This is the dummy post"
    })
    await post.save();
    res.send("Post created successfully")
})

app.get("/post/:id", async (req, res) => {
    let data = await Post.findById(req.params.id);
    res.send(data);
})
app.listen(5000, async () => {
    console.log("Server is running on port 5000");
    await connectDB();
})
































