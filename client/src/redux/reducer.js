import { GET_VIDEOGAMES, GET_VG_BY_NAME, GET_DETAIL, CLEAN_DETAIL } from "./action-types";

const initialState = {
    allVideoGames:[],
    videogames:[],
    genres:[],
    detail:[],
    page:1,
    isLoading: true,
 };

 function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_VIDEOGAMES:
            return{
                ...state, 
                allVideoGames: action.payload,
                videogames: action.payload,
                //isLoading: action.payload,
            };
            // state = {...state, allVideoGames: action.payload}
            // console.log(state);
            // return;
        case GET_VG_BY_NAME:
            return{
                ...state, 
                videogames: action.payload,
            };

        case GET_DETAIL:
            return{
                ...state, 
                detail: action.payload,
            };

        case CLEAN_DETAIL:
            return{
                ...state, 
                detail: action.payload,
            }

        default:
            return state;
    }
}

 export default rootReducer;