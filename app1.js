const express = require('express')

const mongoose = require('mongoose')
const url = 'mongodb://localhost/boooksDB'

const app = express()

mongoose.connect(url)
const con = mongoose.connection
con.on('open', () => {
    console.log("database  connected")
})
app.listen(27017, () => {
    console.log("server started")
})