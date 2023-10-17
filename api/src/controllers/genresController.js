const {Genre} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {URL_BASE_GENRES, API_KEY} = process.env

const getAllGenres = async () => {
    try {
        const infoGenres = (await axios.get(`${URL_BASE_GENRES}?key=${API_KEY}`)).data;
        const cleanGenres = cleanInfo(infoGenres.results);
        findorCreateGenre(cleanGenres);
        return Genre.findAll();
    } catch (error) {
        return {error: error.message}
    }
}

const cleanInfo = (arr) => {
    return arr.map((gen) => gen.name);
}

const findorCreateGenre = (arr) => {
   return arr.map(async (gen) => {await Genre.findOrCreate({where:{name : gen}})});
}

module.exports = {
    getAllGenres,
}