require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const VideogameModel = require('./models/Videogame');
const GenreModel = require('./models/Genre');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // (true) permite ver en consola las sentencias SQL que Sequelize ejecuta por detras
  //native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

// DEFINICION DE MODELOS

VideogameModel(sequelize);
GenreModel(sequelize);
 
const { Videogame, Genre } = sequelize.models;

// CREAMOS RELACIONES ENTRE TABLAS 

Videogame.belongsToMany(Genre,{through:'Videogame_Genre',timestamps: false});
Genre.belongsToMany(Videogame,{through:'Videogame_Genre',timestamps: false});


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
