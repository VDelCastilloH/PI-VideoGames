const { Router } = require('express');
const Server = require('../app');
const mainRouter = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

mainRouter.get('/videogames',(req, res)=>{

});

mainRouter.get('/videogames/:idVG', (req,res)=>{

})

mainRouter.get('/videogames')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = Router;
