// Sincronizacion de los modelos con la base de datos
// Servidor en escucha de requerimientos 
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require ("dotenv").config();
const{ PORT } = process.env;

// Sincronizando todos los modelos a la vez
conn.sync({ force: false })
.then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT} ✅`); 
  });
});
