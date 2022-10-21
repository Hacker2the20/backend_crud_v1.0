const express = require('express');
const router = express.Router();
// posts Model
const Productos = require('../../models/Productos');


// @routes GET api/posts
// @desc GET ALL post
router.get('/', async (req, res) => {
    try {
        const productos = await Productos.find();
        if(!productos) throw Error('No hay productos');
        res.status(200).json(productos);
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
    const newProducto = new Productos(req.body);

    try {
        const producto = await newProducto.save();
        if(!producto) throw Error('Algo salio mal mientras se guardaba el producto');

        res.status(200).json(producto);
    } catch {
        res.status(400).json({ msg: err });
    }

});



// @routes DELETE api/posts/:id
// @desc delete An post
router.delete('/:id', async (req, res) => {
    try {
        const producto = await Productos.findByIdAndDelete(req.params.id);
        if(!producto) throw Error('No producto fue encontrado!');
        res.status(200).json(producto);
    }catch(err) {  
        res.status(400).json({ msg: err });
    }
});

// @routes UPDATE api/posts/:id
// @desc update An post
router.put('/:id', async (req, res) => {
    try {
        const producto = await Productos.findByIdAndUpdate(req.params.id, req.body);
        if(!producto) throw Error('Algo salio mal mientras se actualizaba el producto!');
        res.status(200).json(producto);
    }catch(err) {  
        res.status(400).json({ msg: err });
    }
});



module.exports = router;