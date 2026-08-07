# Product Manager MERN

Complete Product Manager starter project using React, Express, Mongoose, and MongoDB Atlas.

## Run backend

```cmd
cd ProductManager_READY\server
npm install
npm run dev
```

Expected:

```text
Connected to MongoDB Atlas
Server running on http://localhost:8000
```

Test:

```text
http://localhost:8000/api/products
```

## Run frontend

Open a second CMD:

```cmd
cd ProductManager_READY\client
npm install
npm run dev
```

Open the Vite address, usually `http://localhost:5173`.

## POST test in Postman

```http
POST http://localhost:8000/api/products
```

Body → raw → JSON:

```json
{
  "title": "Laptop",
  "price": 1200,
  "description": "Development laptop"
}
```

The response is the complete MongoDB document and includes `_id`, `createdAt`, `updatedAt`, and `__v`.

## Atlas

Database: `product_manager`

Collection: `products`

## GitHub

The real `server/.env` is included locally so this copy can run immediately, but `.gitignore` excludes it. Before pushing, run `git status` and make sure `server/.env` is not staged.
