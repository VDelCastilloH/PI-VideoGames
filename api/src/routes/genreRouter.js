const {Router} = require('express');
const genreRouter = Router();

const {getGenresHandler} = require('../handlers/genresHandler');

//genreRouter.get('/',getGenresHandler);

module.exports = genreRouter;