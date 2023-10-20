import { GET_VIDEOGAMES } from "./action-types";

const initialState = {
    allVideoGames:[],
    genres:[]
 }

 function rootReducer (state = initialState, action){
    // console.log(action.type);
    // console.log(action.payload);
    switch (action.type) {
        case GET_VIDEOGAMES:
            return{
                ...state, allVideoGames: action.payload
            }
            // state = {...state, allVideoGames: action.payload}
            // console.log(state);
            // return;
        default:
            return state;
    }
}

 export default rootReducer;