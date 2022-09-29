const express = require('express')

const router = new express.Router()
const book1 = require('../models/book')

router.get('/', async(req, res) => {
    try {
        const b1 = await book1.find()
        res.json(b1)
    } catch (err) {
        res.send('error' + err)
    }
})
router.patch('/:id', async(req, res) => {
    try {
        const b4 = await book1.findById(req.params.id)
        b4.purchsed = req.body.purchased
        const a1 = await b4.save()
        res.json(a1)
    } catch (err) {
        res.send('error' + err)
    }
})
router.post('/', async(req, res) => {
    const b3 = new book1({
        title: req.body.title,
        author: req.body.author,
        purchase: req.body.purchase
    })

    try {
        const b2 = await b3.save()
        res.json(b2)
    } catch (err) {
        res.send('error' + err)

    }
})
module.exports = router