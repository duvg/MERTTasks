const express = require('express');
const defaultRoutes = require('./routes/defaultRoutes.js');
const connectDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
connectDB();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Cargar las rutas
app.use('/', defaultRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidsor en linea en el puerto ${PORT}`);
});