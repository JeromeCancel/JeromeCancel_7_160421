const { User, user } = require ('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// FUNCTION FOR SIGN TOKEN JWT
function jwtSignUser (user) {
    return jwt.sign(user, 'RANDOM_TOKEN_SECRET', {
        expiresIn: '24h'
    })
};

// LOGIC FOR THE REGISTER PART WITH PASSWORD HASH AND TOKEN
const register = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        });
        const userJson = user.toJSON()
        res.status(201).send({
            user: userJson,
            token: jwtSignUser(userJson)
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

// LOGIC FOR THE LOGIN PART WITH COMPARE PASSWORD AND TOKEN
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: "Aucun utlisateur correspondant à cette adresse email."
                })
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: "Le mot de passe n'est pas valide."
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
    } catch (error) {
        res.status(500).send({
            error: "Une erreur est survenue lors de la connection."
        })
    }
};

// LOGIC FOR DELETE ONE USER IN THE DB
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
             await user.destroy({
                where: { id: id }
              })
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
            const user = await User.update(userNewDatas,{
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
            const user =  await User.findOne({
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
    register,
    login,
    deleteUser,
    updateUser,
    getUser
};
