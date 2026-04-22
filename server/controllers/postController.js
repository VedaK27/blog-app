const Post = require("../models/Post");

exports.createPost = async (req, res) => {

    try {

        const post = new Post({

            title: req.body.title,
            content: req.body.content,
            author: req.user.id

        });

        await post.save();

        res.json(post);

    } catch (error) {

        res.status(500).json(error);

    }
};

exports.getPosts = async (req, res) => {

    const posts = await Post
        .find()
        .populate("author", "name");

    res.json(posts);
};

exports.deletePost = async (req, res) => {

    await Post.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: "Post deleted"
    });
};