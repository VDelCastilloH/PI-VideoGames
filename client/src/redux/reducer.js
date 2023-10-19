import { GET_VIDEOGAMES } from "./actions";

const initialState = {
    allVideoGames: [],
    genres: [],
 }

 function rootReducer (state = initialState, action){

    switch (action.type) {
        case GET_VIDEOGAMES:
            return{
                ...state, allVideoGames: action.payload,
            }
        default:
            return state;
    }
 }

 export default rootReducer;