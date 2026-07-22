const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(cors());
app.use(express.json());


function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token required" });
  }
  next();
}


const createPostLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 10,                  
  message: { message: "Too many posts" }
});


app.post("/posts", createPostLimiter, auth, (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "All fields required" });
  }
  if (title.length < 5) {
    return res.status(400).json({ message: "Title too short" });
  }
  if (content.length < 20) {
    return res.status(400).json({ message: "Content too short" });
  }

  const cleanTitle = title.trim();
  const cleanContent = content.trim();

  
  return res.status(201).json({
    message: "Post created",
    title: cleanTitle,
    content: cleanContent
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
