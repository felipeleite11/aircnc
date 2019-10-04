const {Types: { ObjectId }} = require('mongoose')

const Spot = require('../models/Spot')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const { tech } = req.query
        const spots = await Spot.find({ techs: tech })
        return res.json(spots)
    },

    async store(req, res) {
        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        if(!ObjectId.isValid(user_id)) {
            return res.status(400).json({ error: 'Usuário não existe.' });
        }

        const user = await User.findById(user_id)

        if(!user) {
            return res.status(400).json({ msg: 'Usuário não existe.' })
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim())
        })

        return res.json(spot)
    }

}