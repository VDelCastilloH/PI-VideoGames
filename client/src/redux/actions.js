import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";

export function getVideogames(){
    return async function(dispatch){
        const response = await axios.get("https://api.rawg.io/api/games?key=81732c79d90f4f65a0538313905a116c");
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: response.data.results
        })
    }
}