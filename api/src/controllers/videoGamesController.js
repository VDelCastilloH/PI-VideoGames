const {Videogame,Genre} = require('../db');
const axios = require('axios');
require('dotenv').config();

const {API_KEY,URL_BASE_GAMES} = process.env;

const getVgApi = async () => {
    let urlApi = `${URL_BASE_GAMES}?key=${API_KEY}`;
    let vgApi = [];
    try {
        // sentencia repetitiva for para traer 100 videogames ya que cada consulta trae 20 
        for(let i=0; i<5; i++){
            const response = await axios.get(urlApi);
            //console.log(response.data);
            response.data.results.map((vg)=>{
                vgApi.push({
                    id: vg.id,
                    name: vg.name,
                    description: `The game ${vg.name} has a rating of ${vg.rating} out of 5 and was released on ${vg.released}.`,
                    platforms: vg.platforms.map((pf)=>pf.platform.name),
                    image: vg.background_image,
                    released: vg.released,
                    rating: vg.rating,
                    genres: vg.genres? vg.genres.map((ge)=>ge.name) : "no gender",
                });
            });
            urlApi = response.data.next;
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
        // console.log(vgBD)
        const vgDBFormat = vgDB.map(result => ({
            ...result.toJSON(),
            genres: result.Genres.map(genre => genre.name)
          }));
        return vgDBFormat;
    } catch (error) {
        return {error: error.message};
    }
}

const getAllVideogames = async () =>{
    try {
        const infoApi = await getVgApi();
        const infoDB = await getVgDb();
        return [...infoApi,...infoDB]; 
        //return infoDB;      
    } catch (error) {
        return {error: error.message};
    }
}

const getVideogameById = async (id,source) =>{
    try {
        if(source === 'api'){
            const response = await axios.get(`${URL_BASE_GAMES}/${id}?key=${API_KEY}`)
            return { 
                    id: response.data.id,
                    name:response.data.name,
                    description: response.data.description_raw,
                    platforms: response.data.platforms.map((pf)=>pf.platform.name),
                    image: response.data.background_image,
                    released: response.data.released,
                    rating: response.data.rating,
                    genres: response.data.genres? response.data.genres.map((ge)=>ge.name) : "no gender"
                }
        } else {
            if (source === 'bdd')
            {   
                const response = await Videogame.findByPk(id,{
                    include:[{
                        model:Genre,
                        attributes:["name"],
                        through: {
                            attributes: []
                        }
                    }]
                });
                //console.log(response);
                const respFormat = {...response.toJSON(), genres: response.Genres.map(genre => genre.name)};
                return respFormat;
            }
        }   
    } catch (error) {
        return {error: error.message};
    }
}

const postVideoGameDb = async (name, description, platforms, image, released, rating, genres) => {
    try {
        if(name){
            const allVg = await getAllVideogames();
            const vgFound = allVg.find((vg)=>vg.name.toUpperCase()===name.toUpperCase())
            if(!vgFound){
                const newVg = await Videogame.create(
                    {
                        name, 
                        description, 
                        platforms, 
                        image, 
                        released, 
                        rating
                    });
                    //console.log(`El genero es: ${dbGen[0].dataValues.name}`);
                const dbGen = await Genre.findAll({where:{name:genres}})
                await newVg.addGenre(dbGen);
                return newVg;
            } else {
                return { error: `A video game with the name (${name}) already exists in the database` }
            }
        } else {
            return { error: `The Video Game must have a name` }
        }
    } catch (error) {
        return {error: error.message};
    }
}

module.exports = {getAllVideogames,getVideogameById,postVideoGameDb}