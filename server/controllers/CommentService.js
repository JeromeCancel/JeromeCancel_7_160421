const models = require('../models');

const createComment = async  (req, res) => {
    const {userId, postId, body} = req.body
        try {
            const userId = req.body.userId;
            const postId = req.body.postId;
            const user = await models.User.findOne({
                where: {
                    id: userId
                }
            })
            const post = await models.Post.findOne({
                where: {
                    id: postId
                }
            })
            const comment = await models.Comment.create({
                body,
                content: req.body.content,
                userId: user.id,
                postId: post.id
            })
            res.send({
                comment
            })
        } catch (error) {
            res.status(400).send({
                error: "La requète n'a pas aboutie !"
            })
        }
};



const findAllComment =  async  (req, res) => {
    try {
        const comments = await models.Comment.findAll({
            limit: 10
        })
        if(comments) {
            res.send({
                comments
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

const findOneComment = async (req, res) => {
    try {
        const id = req.params.id;
            const comment =  await models.Comment.findOne({
                where: { id: id }
              },)
            res.send({
                message: 'Commentaire trouvé',
                comment
            })
    } catch (error) {
        res.status(500).send({
            error: "Un problème est survenu"
        }) 
    }
}


module.exports = {
    findAllComment,
    findOneComment,
    createComment
};