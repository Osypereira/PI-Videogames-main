const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripción: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
       type: DataTypes.STRING,
       allowNull: false
    },
    fechaDeLanzamiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  });
};
