const express = require('express');
const usuarioController = require('../controllers/usuarioController.js');

const router = express.Router();

// Obtener todos los usuarios
router.get('/usuarios', usuarioController.obtenerUsuarios);

// Obtener un usuario por su ID
router.get('/usuarios/:id', usuarioController.obtenerUsuarioPorId);

// Crear un nuevo usuario
router.post('/crear', usuarioController.crearUsuario);

// Actualizar un usuario existente
router.put('/actualizar/:id', usuarioController.actualizarUsuario);

// Eliminar un usuario existente
router.delete('/eliminar/:id', usuarioController.eliminarUsuario);

//Obtener todos los usuarios por nombre
router.get('/usuariosU/:nombreUsuario', usuarioController.obtenerUsuarioPorNombre);

//login
router.post('/login', usuarioController.login);


module.exports = router;
