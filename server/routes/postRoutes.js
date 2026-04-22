const express = require("express");

const router = express.Router();

const authMiddleware =
    require("../middleware/authMiddleware");

const {
    createPost,
    getPosts,
    deletePost
} = require("../controllers/postController");

router.get("/", getPosts);

router.post(
    "/",
    authMiddleware,
    createPost
);

router.delete(
    "/:id",
    authMiddleware,
    deletePost
);

module.exports = router;