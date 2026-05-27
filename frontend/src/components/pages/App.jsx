/*
Below is a **complete MERN Blog Application backend** with all RESTful routes (Create, Read, Update, Delete).

# Folder Structure

```text
blog-app/
│
├── backend/
│   │
│   ├── models/
│   │   └── Blog.js
│   │
│   ├── routes/
│   │   └── blogRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
```

---

# Step 1: Install Packages

Open terminal inside backend folder:

```bash
npm init -y
npm install express mongoose cors dotenv
npm install nodemon --save-dev
```

---

# Step 2: package.json

```json
{
  "name": "blog-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

---

# Step 3: .env

Create `.env`

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogdb
```

---

# Step 4: Blog Model

### models/Blog.js

```js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    content: {
      type: String,
      required: true
    },

    author: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Blog", blogSchema);
```

---

# Step 5: Blog Routes

### routes/blogRoutes.js

```js
const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog");


// GET ALL BLOGS
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// GET SINGLE BLOG
router.get("/:id", async (req, res) => {
  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// CREATE BLOG
router.post("/", async (req, res) => {
  try {

    const { title, content, author } = req.body;

    const newBlog = new Blog({
      title,
      content,
      author
    });

    const savedBlog = await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: savedBlog
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});


// UPDATE BLOG
router.put("/:id", async (req, res) => {
  try {

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});


// DELETE BLOG
router.delete("/:id", async (req, res) => {
  try {

    const deletedBlog = await Blog.findByIdAndDelete(
      req.params.id
    );

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
```

---

# Step 6: Server

### server.js

```js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });


// Routes
app.use("/api/blogs", blogRoutes);


// Home Route
app.get("/", (req, res) => {
  res.send("Blog API Running...");
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

# Run Project

```bash
npm run dev
```

Output:

```text
MongoDB Connected
Server running on port 5000
```

---

# API Endpoints

### Create Blog

```http
POST http://localhost:5000/api/blogs
```

Body:

```json
{
  "title": "My First Blog",
  "content": "This is my first MERN blog.",
  "author": "Dolly"
}
```

---

### Get All Blogs

```http
GET http://localhost:5000/api/blogs
```

---

### Get One Blog

```http
GET http://localhost:5000/api/blogs/ID
```

---

### Update Blog

```http
PUT http://localhost:5000/api/blogs/ID
```

Body:

```json
{
  "title": "Updated Blog",
  "content": "Updated Content",
  "author": "Dolly"
}
```

---

### Delete Blog

```http
DELETE http://localhost:5000/api/blogs/ID
```

This backend is enough for a **RESTful Blog Application using MERN Stack  ** and is suitable for B.Tech practicals, mini projects, and interview demonstrations.
*/