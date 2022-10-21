const express = require('express');
const MetodosDePago = require('../../models/MetodosDePago');
const router = express.Router();
// Medos de pago Model


// @routes GET api/posts
// @desc GET ALL post
router.get('/', async (req, res) => {
    try {
        const metodosDePago = await MetodosDePago.find();
        if(!metodosDePago) throw Error('No Items');
        res.status(200).json(metodosDePago);
    }catch(err) {
        res.status(400).json({ msg: err });
    }
});


// @routes GET api/posts/:id
// @desc GET A post
router.get('/:id', async (req, res) => {
    try {
        const metodoDePago = await MetodosDePago.findById(req.params.id);
        if(!metodoDePago) throw Error('No esta en la base de datos');
        res.status(200).json(metodoDePago);
    }catch(err) {
        res.status(400).json({ msg: err });
    }
});


// @routes POST api/posts
// @desc Create An post
router.post('/', async (req, res) => {

//    res.send(`Hay que crear post!`);
//    console.log(req.body);
    const newMetodoDePago = new MetodosDePago(req.body);

    try {
        const metodoDePago = await newMetodoDePago.save();
        if(!metodoDePago) throw Error('Algo salio mal mientras se guardaba el metodo de pago');

        res.status(200).json(metodoDePago);
    } catch(err) {
        res.status(400).json({ msg: err });
    }

});



// @routes DELETE api/posts/:id
// @desc delete An post
router.delete('/:id', async (req, res) => {
    try {
        const metodoDePago = await MetodosDePago.findByIdAndDelete(req.params.id);
        if(!metodoDePago) throw Error('No usuario fue encontrado!');
        res.status(200).json(metodoDePago);
    }catch(err) {  
        res.status(400).json({ msg: err });
    }
});



// @routes UPDATE api/posts/:id
// @desc update An post
router.put('/:id', async (req, res) => {
    try {
        const metodoDePago = await MetodosDePago.findByIdAndUpdate(req.params.id, req.body);
        if(!metodoDePago) throw Error('Algo salio mal mientras se actualizaba el metodo de pago!');
        res.status(200).json(metodoDePago);
    }catch(err) {  
        res.status(400).json({ msg: err });
    }
});



module.exports = router;