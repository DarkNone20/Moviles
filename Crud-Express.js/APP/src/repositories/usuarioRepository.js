const connection = require('../db.js');
const Usuario = require('../models/usuarioModel.js');

// Obtener todos los usuarios
async function obtenerUsuarios() {
  return await Usuario.findAll();
}

// Obtener un usuario por ID
async function obtenerUsuarioPorId(id) {
  return await Usuario.findByPk(id);
}

// Crear un usuario
async function crearUsuario(usuario) {
  console.log(usuario); 
  return await Usuario.create(usuario);
}

// Actualizar un usuario
async function actualizarUsuario(id, usuario) {
  await Usuario.update(usuario, { where: { id } });
  return await Usuario.findByPk(id);
}

// Eliminar un usuario
async function eliminarUsuario(id) {
  return await Usuario.destroy({ where: { id } });
}

// Obtener un usuario por nombre de usuario
async function obtenerUsuarioPorNombre(nombreUsuario) {
  return await Usuario.findOne({ where: { Usuario: nombreUsuario } });
}

// login
async function login(nombreUsuario, contraseña) {
  const usuario = await Usuario.findOne({ where: { Usuario: nombreUsuario, Contrasena: contraseña } });

  if (usuario) {
    return { body: usuario }; // Envolvemos el usuario en un objeto "body"
  } else {
    throw { message: 'Nombre de usuario o contraseña incorrectos' }; // Cambiamos "error" por "message"
  }
}


module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  obtenerUsuarioPorNombre,
  login
};
