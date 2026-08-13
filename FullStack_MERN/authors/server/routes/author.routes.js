const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/author.controller");

router.get("/", AuthorController.getAllAuthors);

router.get("/:id", AuthorController.getOneAuthor);

router.post("/", AuthorController.createAuthor);

router.put("/:id", AuthorController.updateAuthor);

router.delete("/:id", AuthorController.deleteAuthor);

module.exports = router;