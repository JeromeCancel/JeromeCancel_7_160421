const models = require('../models');


// LOGIC FOR DELETE ONE USER IN THE DB
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
            const user =  await models.User.findOne({
                where: { id: id }
            })
            user.destroy()
            res.send({
                message: 'Utilisateur supprimé'
            })
    } catch (error) {
        res.status(500).send({
            error: "Un problème est survenu"
        })
    }
};

//LOGIC FOR UPDATE ONE USER IN THE DB
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userNewDatas = req.body;
            const user = await models.User.update(userNewDatas,{
                where: {id: id}
            })
            const newUser = await User.findOne({
                where: {id: id}
            })
            const userJson = newUser.toJSON()
            res.send({
                message: "Utilisateur mis à jour",
                userJson
            })
    } catch (error) {
        res.status(500).send({
            error: "Un problème est survenu"
        })
    }
};

// LOGIC FOR RETRIEVE ONE USER IN THE DB
const getUser = async (req, res) => {
    try {
        const id = req.params.id;
            const user =  await models.User.findOne({
                where: { id: id }
              })
            const userJson = user.toJSON()
            res.send({
                message: 'Utilisateur trouvé',
                userJson
            })
    } catch (error) {
        res.status(500).send({
            error: "Un problème est survenu"
        }) 
    }
}

// EXPORT LOGICS
module.exports = {
    deleteUser,
    updateUser,
    getUser
};
