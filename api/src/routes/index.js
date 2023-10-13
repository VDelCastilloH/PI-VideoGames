const { Router } = require('express');
const mainRouter = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const vgRouter = require('./vgRouter.js');
const genreRouter = require('./genreRouter.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use('/videogames',vgRouter);
//mainRouter.use('/genres',genreRouter);

module.exports = mainRouter;
