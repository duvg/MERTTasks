const express = require('express');
const connectDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
connectDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar las rutas
app.use('/api/', require('./routes/defaultRoutes'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidsor en linea en el puerto ${PORT}`);
});