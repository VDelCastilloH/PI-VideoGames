const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      // type: DataTypes.INTEGER,
      // autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    plataformas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_lanzamiento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: false,
    },
    createdDB:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }
  },
  {timestamps:false}
  );
};
