const { Post, post } = require('../models');
const { User, user } = require ('../models');


const createPost = async  (req, res, next) => {
        try {
            const post = await Post.create({
                title: req.body.title,
                content: req.body.content,
            })
            const postJson = post.toJSON()
            res.send({
                post: postJson
            })
        } catch (error) {
            res.status(400).send({
                error: "Y'a un soucis la !"
            })
        }
};

const findAllPost =  async  (req, res, next) => {
        try {
            const posts = await Post.findAll({
                limit: 10
            })
            res.send(posts)
        } catch (error) {
            res.status(400).send({
                error: "La requète n'a pas aboutie !"
            })
        }
};

const findOnePost = async (req, res, next) => {
    try {
        const id = req.params.id;
            const post = await Post.findOne({
                where: {id: id}
            })
            const postJson = post.toJSON()
            res.send({
                postJson
            })
    } catch (error) {
        res.status(400).send({
            error: "La requète n'a pas aboutie !"
        })
    }
}

module.exports = {
    createPost,
    findAllPost,
    findOnePost
};