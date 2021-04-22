const models = require('../models');

const createPost = async  (req, res) => {
    const {userId, title, content} = req.body
        try {
            const userId = req.body.userId;
            const title = req.body.title;
            const content = req.body.content
            /*const user = await models.User.findOne({
                where: {
                    id: userId
                }
            })*/
            const post = await models.Post.create({
                title: title,
                content: content,
                userId: userId
            })
            res.send({
                post
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
                limit: 10,
                order: [['createdAt', 'DESC']],
                include: [{
                    model: models.User,
                    attributes: ["firstName", "lastName"]
                },
                {
                    model: models.Comment,
                    attributes: ["content", "id", "userId", "postId"]
                },
                /*{
                    model: models.Like,
                    attributes: ["like"]
                }*/
            ],
                //raw:true,
                //nest:true
            })
            if(posts) {
                res.status(200).send({
                    posts
                })
            }
            else {
                res.status(404).send({
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