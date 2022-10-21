const express = require('express');
const router = express.Router();
// posts Model
const Roles = require('../../models/Roles');

// @routes GET api/posts
// @desc GET ALL post
router.get('/', async (req, res) => {
    try {
        const roles = await Roles.find();
        if(!roles) throw Error('No Items');
        res.status(200).json(roles);
    }catch(err) {
        res.status(400).json({ msg: err });
    }
});

// @routes GET api/posts/:id
// @desc GET A post
router.get('/:id', async (req, res) => {
    try {
        const rol = await Roles.findById(req.params.id);
        if(!rol) throw Error('No Items');
        res.status(200).json(rol);
    }catch(err) {
        res.status(400).json({ msg: err });
    }
});


// @routes POST api/posts
// @desc Create An post
router.post('/', async (req, res) => {

//    res.send(`Hay que crear post!`);
//    console.log(req.body);
    const newRol = new Roles(req.body);

    try {
        const rol = await newRol.save();
        if(!rol) throw Error('Algo salio mal mientras se guardaba el rol');

        res.status(200).json(rol);
    } catch {
        res.status(400).json({ msg: err });
    }

});



// @routes DELETE api/posts/:id
// @desc delete An post
router.delete('/:id', async (req, res) => {
    try {
        const rol = await Roles.findByIdAndDelete(req.params.id);
        if(!rol) throw Error('No post fue encontrado!');
        res.status(200).json(rol);
    }catch(err) {  
        res.status(400).json({ msg: err });
    }
});


/*
// @routes UPDATE api/posts/:id
// @desc update An post
router.patch('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!post) throw Error('Algo salio mal mientras se actualizaba el post!');
        res.status(200).json({ success: true })
    }catch(err) {  
        res.status(400).json({ msg: err })
    }
});

*/

module.exports = router;