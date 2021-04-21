const models = require('../models');

const createPost = async  (req, res) => {
    const {userId, body} = req.body
        try {
            const id = req.params.id;
            const user = await models.User.findOne({
                where: {
                    id: id
                }
            })
            const post = await models.Post.create({
                body,
                userId: user.id
            })
            const postJson = post.toJSON()
            res.send({
                post: postJson
            })
        } catch (error) {
            res.status(400).send({
                error: "La requète n'a pas aboutie !"
            })
        }
};

const findAllPost =  async  (req, res) => {
        try {
            const posts = await models.Post.findAll({
                limit: 10
            })
            if(posts) {
                res.send({
                    posts
                })
            }
            else {
                res.status(400).send({
                    message: "Aucun post trouvé"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({
                
                error: "La requète n'a pas aboutie !"
            })
        }
};

const findOnePost = async (req, res) => {
    try {
        const id = req.params.id;
            const post =  await models.Post.findOne({
                where: { id: id }
              },)
            const postJson = post.toJSON()
            res.send({
                message: 'Article trouvé',
                postJson
            })
    } catch (error) {
        res.status(500).send({
            error: "Un problème est survenu"
        }) 
    }
}

module.exports = {
    createPost,
    findAllPost,
    findOnePost
};