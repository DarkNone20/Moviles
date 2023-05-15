const express = require('express');
const cors = require('cors'); // Importar el middleware cors
const usuarioRoutes = require('./routes/usuarioRoutes.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar CORS para todas las solicitudes
app.use(cors());

app.use('/', usuarioRoutes);

app.listen(8801, () => {
  console.log('Servidor escuchando en puerto 8801');
});