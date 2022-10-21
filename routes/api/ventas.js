const express = require('express');
const router = express.Router();
// posts Model
const Ventas = require('../../models/Ventas');


// @routes GET api/posts
// @desc GET ALL post
router.get('/', async (req, res) => {
    try {
        const ventas = await Ventas.find();
        if(!ventas) throw Error('No hay ventas registradas');
        res.status(200).json(ventas);
    }catch(err) {
        res.status(400).json({ msg: err });
    }
});

/*
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
*/

// @routes POST api/posts
// @desc Create An post
router.post('/', async (req, res) => {

//    res.send(`Hay que crear post!`);
//    console.log(req.body);
    const newVenta = new Ventas(req.body);

    try {
        const venta = await newVenta.save();
        if(!venta) throw Error('Algo salio mal mientras se guardaba la venta');

        res.status(200).json(venta);
    } catch {
        res.status(400).json({ msg: err });
    }

});

/*
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

*/
module.exports = router;