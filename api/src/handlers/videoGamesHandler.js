const { getAllVideogames, 
        getVideogameById,
        postVideoGameDb } = require('../controllers/videoGamesController');

const getVideoGamesHandler = async (req,res) => {
    const {name} = req.query;
    try {
        const response = await getAllVideogames();
        if(!name){
            res.status(200).json(response)
        } else {
            let vgName = response.filter((game)=>{if(game.name.toUpperCase()
                .includes(name.toUpperCase())) return game;});
            
            vgName.length 
                ? res.status(200).json(vgName.slice(0,15)) 
                : res.status(400).send('Videojuego no encontrado');
        }

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getVideoGameIdHandler = async (req,res) => {
    const {id} = req.params;
    const source = isNaN(id) ?  'bdd' : 'api';
    try {
        const response = await getVideogameById(id,source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createVideoGameHandler = async (req,res) =>{
    const { name, 
            description, 
            platforms, 
            image, 
            released, 
            rating, 
            genres } = req.body;
    try {
        const newVg = await postVideoGameDb(name, 
            description, 
            platforms, 
            image, 
            released, 
            rating, 
            genres);
        if(!newVg.error){
            res.status(200).json(newVg);
        } else {
            res.status(400).json(newVg);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getVideoGamesHandler,
    getVideoGameIdHandler,
    createVideoGameHandler,
}