
const mongoose = require('mongoose')
const HistorySchema = require('../model/history')

exports.getHistory = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const owner = req.query.owner;
        const query = { buyer: owner };
        const history = await HistorySchema.find(query);
        const limitData = history.slice(0, limit);
        res.json(limitData)
    } catch (err) {
        res.json({ message: err })
    }
}
