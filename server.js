const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const app = express();
//BodyParser Middleware
app.use(express.json());

//Routes
const usersRoutes = require('./routes/api/users');
const rolesRoutes = require('./routes/api/roles');
const metodosDePagoRoutes = require('./routes/api/metodosDePago');
const sucursalesRoutes = require('./routes/api/sucursales');
const productosRoutes = require('./routes/api/productos');
const ventasRoutes = require('./routes/api/ventas');
const authRoutes = require('./route/api/auth');

// User routes
app.use('/api/users', usersRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/metodosDePago', metodosDePagoRoutes);
app.use('/api/sucursales', sucursalesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use("/api/auth", require("./route/api/auth"));


//Connect to MongoDB
mongoose.connect(MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));




/*
app.get('/', (req, res) => {
    res.send('Hello backend III');
});
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server run at port ${PORT}`));