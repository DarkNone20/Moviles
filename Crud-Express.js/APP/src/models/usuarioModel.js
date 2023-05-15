const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Usuario = sequelize.define('usuario', {
  Usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'usuario', // Nombre de la tabla en la base de datos
  timestamps: false // Deshabilitar el uso de timestamps
});

module.exports = Usuario;

