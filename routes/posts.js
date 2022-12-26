const express = require("express");

const router = express.Router();

const postsController = require("../controllers/posts");

router.get("/", postsController.listPosts);
router.get("/:id", postsController.getPost);
router.post("/", postsController.newPost);

module.exports = router;
