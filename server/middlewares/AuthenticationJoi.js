const Joi = require('joi');

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({

            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })
        const {error} = schema.validate(req.body)
        console.log(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: "Veuillez fournir une adresse email valide."
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Le mot de passe n'est pas valide:
                        8 à 32 caractères (pas de spéciaux).`
                    })
                    break
                default:
                    console.log(error)
                    res.status(400).send({
                        error: "Informations d'enregistrement invalides"
                    })
            }
        } else {
            next()
        }
    }
};