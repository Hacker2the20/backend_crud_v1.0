const express = require('express');
const router = express.Router();
// posts Model
const Users = require('../../models/Users');

// @routes GET api/posts
// @desc GET ALL post
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        if(!users) throw Error('No Items');
        res.status(200).json(users);
    }catch(err) {
        res.status(400).json({ msg: err });
    }
});

// @routes GET api/posts/:id
// @desc GET A post
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        if(!user) throw Error('No esta en la base de datos');
        res.status(200).json(user);
    }catch(err) {
        res.status(400).json({ msg: err })
    }
});


// @routes POST api/posts
// @desc Create An post
router.post('/', async (req, res) => {

//    res.send(`Hay que crear post!`);
//    console.log(req.body);
    const newUser = new Users(req.body);

    try {
        const user = await newUser.save();
        if(!user) throw Error('Algo salio mal mientras se guardaba el post');

        res.status(200).json(user);
    } catch {
        res.status(400).json({ msg: err });
    }

});

// @routes DELETE api/posts/:id
// @desc delete An post
router.delete('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if(!user) throw Error('No usuario fue encontrado!');
        res.status(200).json(user);
    }catch(err) {  
        res.status(400).json({ msg: err });
    }
});

// @routes UPDATE api/posts/:id
// @desc update An post
router.put('/:id', async (req, res) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body);
        if(!user) throw Error('Algo salio mal mientras se actualizaba el usuario!');
        res.status(200).json(user);
    }catch(err) {  
        res.status(400).json({ msg: err });
    }
});

module.exports = router;