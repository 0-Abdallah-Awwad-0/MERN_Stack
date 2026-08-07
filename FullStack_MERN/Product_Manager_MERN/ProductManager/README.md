# Product Manager — MERN Stack

A full-stack MERN application that allows users to create products directly from the main page.

Each product contains:

- Title
- Price
- Description

The React client sends product information to an Express API. Mongoose validates the data and stores it in MongoDB Atlas.

## Project structure

```text
ProductManager/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.jsx
│   │   │   └── ProductList.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── config/
│   │   └── mongoose.config.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.routes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── .gitignore
└── README.md
```

## Application flow

```text
React form
    ↓ Axios POST request
Express route
    ↓
Product controller
    ↓
Mongoose Product model
    ↓
MongoDB Atlas
```

## Requirements

- Node.js 20.19 or newer
- npm
- MongoDB Atlas
- A database user
- Your current IP address added to the Atlas IP Access List

## 1. Configure the backend

Open CMD in the project folder:

```cmd
cd ProductManager\server
```

Install the dependencies:

```cmd
npm install
```

Copy:

```text
.env.example
```

Rename the copy:

```text
.env
```

Update it with your Atlas connection string:

```env
PORT=8000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER_ADDRESS/product_manager?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```

Do not upload `.env` to GitHub.

Start the backend:

```cmd
npm run dev
```

A successful startup displays:

```text
Successfully connected to MongoDB
Server listening on http://localhost:8000
```

Test the API in your browser:

```text
http://localhost:8000/api/products
```

The initial result should be:

```json
{
  "products": []
}
```

## 2. Configure the React client

Open a second CMD window:

```cmd
cd ProductManager\client
```

Install the dependencies:

```cmd
npm install
```

Copy:

```text
.env.example
```

Rename the copy:

```text
.env
```

The default value is:

```env
VITE_API_URL=http://localhost:8000
```

Start React:

```cmd
npm run dev
```

Open:

```text
http://localhost:5173
```

## Product validation

The Product model enforces these rules:

- Title is required and must contain at least 2 characters.
- Price is required and cannot be negative.
- Description is required and must contain at least 5 characters.
- Mongoose automatically creates `createdAt` and `updatedAt`.

Example product:

```json
{
  "title": "Laptop",
  "price": 999.99,
  "description": "A lightweight development laptop."
}
```

## API routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| POST | `/api/products` | Create a product |

## Main Mongoose methods

```text
Product.find()     Retrieve all products
Product.create()   Create a new product
```

## Confirm products in Atlas

After submitting the form:

1. Open MongoDB Atlas.
2. Open your cluster.
3. Click **Browse Collections**.
4. Open the `product_manager` database.
5. Open the `products` collection.

The submitted product should appear there.

## Push to GitHub

Create an empty GitHub repository, then run these commands inside `ProductManager`:

```cmd
git init
git add .
git commit -m "Complete Product Manager create assignment"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

The `.gitignore` prevents `.env` and `node_modules` from being uploaded.
