const {Router} = require('express');

const { getVideoGamesHandler, 
        getVideoGameIdHandler, 
        createVideoGameHandler } = require('../handlers/videoGamesHandler');

const vgRouter = Router();

vgRouter.get('/', getVideoGamesHandler);
//vgRouter.get('/:id', getVideoGameIdHandler);
//vgRouter.post('/',createVideoGameHandler);

module.exports = vgRouter;
