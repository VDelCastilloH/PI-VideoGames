const {Videogame,Genre} = require('../db');
const axios = require('axios');
require('dotenv').config();

const {API_KEY,URL_BASE_GAMES} = process.env;

const getVgApi = async () => {
    let urlApi = `${URL_BASE_GAMES}?key=${API_KEY}`;
    let vgApi = [];
    
    try {
        // sentencia repetitiva for para traer 100 videogames ya que cada consulta trae 20 
        for(i=0; i<5; i++){
            const response = await axios.get(urlApi);
            response.data.results.map((vg)=>{
                vgApi.push({
                    id: vg.id,
                    name: vg.name,
                    image: vg.background_image,
                    rating: vg.rating,
                    released: vg.released,
                    description: `El juego ${vg.name} tiene una valoracion de ${vg.rating} de 5 y fue lanzada el ${vg.released}.`,
                    platforms: vg.platforms.map((pf)=>pf.platform.name),
                    genre: vg.genre.map((ge)=>ge.name),
                });
            });
            response.data.next;
        }
        return vgApi;
    } catch (error) {
       return {error: error.message}; 
    }
}

const getVgDb = async () => {
    try {
        const vgDB = await Videogame.findAll({
            include:[{
                model:Genre,
                attributes:["name"],
                through: {
                    attributes: []
                }
            }]
        });
    } catch (error) {
        return {error: error.message};
    }
}

const getAllVideogames = async () =>{
    try {
        const infoApi = await getVgApi();
        const infoDB = await getVgDb();
        return [... infoApi,...infoDB];       
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {getAllVideogames,}