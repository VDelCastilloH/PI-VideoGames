import { GET_VIDEOGAMES } from './action-types';
import axios from 'axios';

const URL_BASE_VG = "http://localhost:3001/videogames";

export function getVideogames(){
    return async function(dispatch){
        try {
            const response = await axios.get(URL_BASE_VG);
            //console.log(response.data);
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: response.data
            })
        } catch (error) {
            return {error: error.message}    
        }
    }
}