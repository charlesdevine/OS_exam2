const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const verifyToken = require('../verifyToken')
const verifyUser = require('../verifyUser')

// CREATE a post (POST /posts) - Requires authentication
router.post("/",verifyToken, async(req, res)=>{
    const userId = req.user._id;
    const postData = new Post({
        title:req.body.user,
        description:req.body.title,
        likes:req.body.text,
        createdBy:userId
    })
    try{
        const postToSave = await postData.save()
        res.send(postToSave)
    }catch(err){
        res.send({message:err})
    }
})

// READ all posts (GET /posts) - Publicly available
router.get('/', async (req,res) =>{
    try{
        const getPosts = await Post.find() 
        res.send(getPosts)
    }catch(err){
        res.send({message:err})
}
})

// READ a single post by ID (GET /posts/:id) - Publicly available
router.get('/:postId', async(req,res)=>{
    try{
        const postById = await Post.findById(req.params.postId)
        res.send(postById)
    }catch(err){
        res.send({message:err})
    }
})

// UPDATE a post (PUT /posts/:id) - Only the post creator can update
router.patch('/:postId', verifyUser, async(req,res) =>{
    try{
        const updatePostById = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{
                title:req.body.user,
                description:req.body.title,
                likes:req.body.text,
                createdBy:req.body.hashtag
            }
        })
        res.send(updatePostById)
    }catch(err){
        res.send({message:err})
    }
})

// DELETE a post (DELETE /posts/:id) - Only the post creator can delete
router.delete('/:postId', verifyUser, async(req,res)=>{
    try{
        const deletePostById = await Post.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    }
})

module.exports = router;