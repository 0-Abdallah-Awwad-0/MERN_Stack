# Jokes API

A complete CRUD REST API built with **Node.js**, **Express**, **MongoDB Atlas**, and **Mongoose**.

## Features

- Create a joke
- Retrieve all jokes
- Retrieve one joke by ID
- Update a joke using PUT or PATCH
- Delete a joke
- Validate incoming joke data
- Retrieve a random joke
- Import ready-made requests into Postman

## Project structure

```text
jokes/
├── config/
│   └── mongoose.config.js
├── controllers/
│   └── joke.controller.js
├── models/
│   └── joke.model.js
├── postman/
│   └── Jokes API.postman_collection.json
├── routes/
│   └── joke.routes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Request flow

```text
HTTP request
    ↓
Express route
    ↓
Controller function
    ↓
Mongoose model
    ↓
MongoDB Atlas
```

## Setup

### 1. Open the project

```cmd
cd jokes
```

### 2. Install dependencies

```cmd
npm install
```

This also creates `package-lock.json`.

### 3. Create `.env`

Copy `.env.example`, rename the copy to `.env`, and insert your own Atlas connection information:

```env
PORT=8000
MONGODB_URI=mongodb+srv://YOUR_DATABASE_USERNAME:YOUR_DATABASE_PASSWORD@YOUR_CLUSTER_ADDRESS/jokes?retryWrites=true&w=majority
```

Never upload `.env` to GitHub.

### 4. Start the server

Development mode:

```cmd
npm run dev
```

Normal mode:

```cmd
npm start
```

A successful start displays:

```text
Successfully connected to MongoDB
Jokes API listening on http://localhost:8000
```

## Joke model

```javascript
{
  setup: String,
  punchline: String
}
```

Mongoose automatically adds `_id`, `createdAt`, and `updatedAt`.

### Validation

- `setup` is required and must contain 10–250 characters.
- `punchline` is required and must contain 3–250 characters.
- Leading and trailing spaces are removed.

Example validation error:

```json
{
  "message": "Validation failed",
  "errors": {
    "setup": "A joke setup is required",
    "punchline": "A punchline is required"
  }
}
```

## Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/jokes` | Get all jokes |
| GET | `/api/jokes/random` | Get one random joke |
| GET | `/api/jokes/:id` | Get one joke |
| POST | `/api/jokes` | Create a joke |
| PUT | `/api/jokes/:id` | Update a joke |
| PATCH | `/api/jokes/:id` | Partially update a joke |
| DELETE | `/api/jokes/:id` | Delete a joke |

The random route appears before `/:id`, preventing Express from treating `random` as a document ID.

## Postman examples

Use this header for requests with a body:

```text
Content-Type: application/json
```

### Create

```http
POST http://localhost:8000/api/jokes
```

```json
{
  "setup": "Why did the developer go broke?",
  "punchline": "Because they used up all their cache."
}
```

### Read all

```http
GET http://localhost:8000/api/jokes
```

### Read one

```http
GET http://localhost:8000/api/jokes/JOKE_ID
```

### Update

```http
PATCH http://localhost:8000/api/jokes/JOKE_ID
```

```json
{
  "punchline": "Because they cleared all their cache."
}
```

You may use PUT with the same URL.

### Delete

```http
DELETE http://localhost:8000/api/jokes/JOKE_ID
```

### Random joke

```http
GET http://localhost:8000/api/jokes/random
```

## Postman collection

Import:

```text
postman/Jokes API.postman_collection.json
```

It contains all CRUD requests and the random-joke bonus. After creating a joke, copy its `_id` into the collection variable named `jokeId`.

## Mongoose methods used

```text
Joke.create()              Create
Joke.find()                Read all
Joke.findById()            Read one
Joke.findByIdAndUpdate()   Update
Joke.findByIdAndDelete()   Delete
Joke.aggregate($sample)    Random joke
```

Updates use:

```javascript
{
  new: true,
  runValidators: true
}
```

- `new: true` returns the updated document.
- `runValidators: true` applies schema validation during updates.

## Push to GitHub

Create an empty GitHub repository, then run these commands inside the `jokes` folder:

```cmd
git init
git add .
git commit -m "Complete Jokes API assignment"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

`.env` and `node_modules/` are ignored automatically.
