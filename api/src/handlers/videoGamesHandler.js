const {getAllVideogames} =require('../controllers/videoGamesController');

const getVideoGamesHandler = async (req,res) => {
    
    try {
        const response = await getAllVideogames();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getVideoGamesHandler
}