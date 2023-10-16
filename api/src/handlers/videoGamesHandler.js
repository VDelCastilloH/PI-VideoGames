const {getAllVideogames} =require('../controllers/videoGamesController');

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
                : res.status(400).send('Juego no encontrado');
        }

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getVideoGamesHandler
}