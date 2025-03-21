const express = require('express')
const router = express.Router()

const Book = require('../models/User')

router.get('/',async(req,res) =>{
    const users = await User.find()
    res.send(users)
})

router.get('/:userId',async(req,res) =>{
    const usersById = await User.findById(req.params.userId)
    res.send(usersById)
})

module.exports = router