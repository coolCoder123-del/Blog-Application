# Blog Application REST API

## Project Overview

This project is a RESTful Blog Application developed using the MERN stack backend technologies. It provides API endpoints to perform CRUD (Create, Read, Update, Delete) operations on blog posts stored in MongoDB.

The application allows users to:

* Create new blog posts
* View all blog posts
* View a specific blog post by ID
* Update existing blog posts
* Delete blog posts

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

---

## Project Structure

```text
backend/
│
├── models/
│   └── Blog.js
│
├── routes/
│   └── blogRoutes.js
│
├── server.js
├── package.json
└── .env
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project Folder

```bash
cd backend
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogdb
```

---

## Running the Application

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server runs on:

```text
http://localhost:5000
```

---

## API Endpoints

### Get All Blogs

**Request**

```http
GET /api/blogs
```

**Response**

```json
{
  "success": true,
  "count": 1,
  "data": [...]
}
```

---

### Get Blog By ID

**Request**

```http
GET /api/blogs/:id
```

**Response**

```json
{
  "success": true,
  "data": {...}
}
```

---

### Create Blog

**Request**

```http
POST /api/blogs
```

**Body**

```json
{
  "title": "My First Blog",
  "content": "This is a blog post",
  "author": "Dolly"
}
```

**Response**

```json
{
  "success": true,
  "message": "Blog created successfully"
}
```

---

### Update Blog

**Request**

```http
PUT /api/blogs/:id
```

**Body**

```json
{
  "title": "Updated Blog",
  "content": "Updated Content",
  "author": "Dolly"
}
```

**Response**

```json
{
  "success": true,
  "message": "Blog updated successfully"
}
```

---

### Delete Blog

**Request**

```http
DELETE /api/blogs/:id
```

**Response**

```json
{
  "success": true,
  "message": "Blog deleted successfully"
}
```

---

## Database Schema

### Blog Model

| Field   | Type   | Required |
| ------- | ------ | -------- |
| title   | String | Yes      |
| content | String | Yes      |
| author  | String | Yes      |

---

## Features

* RESTful API architecture
* MongoDB database integration
* Mongoose schema validation
* Error handling
* CRUD functionality
* Environment variable configuration
* Modular project structure

---

## Testing

The API can be tested using:

* Postman
* Thunder Client
* Browser (GET requests)

---

## Author

**Dolly**

B.Tech Mechanical Engineering Student

---

## Conclusion

This project demonstrates the implementation of RESTful routes in a MERN stack environment using Express.js and MongoDB. It provides a scalable backend structure for managing blog posts through standard CRUD operations.

---


