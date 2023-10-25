import { GET_VIDEOGAMES, 
        GET_VG_BY_NAME, 
        GET_DETAIL, 
        CLEAN_DETAIL,
        ORDER_BY_NAME,
        GET_GENRES } from "./action-types";

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

        case GET_GENRES:
            return{
                ...state, 
                genres: action.payload,
            };  

        case CLEAN_DETAIL:
            return{
                ...state, 
                detail: action.payload,
            };
        
        case ORDER_BY_NAME:     
            const vgOrdered = action.payload === "ASC"? 
                state.allVideoGames.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
                return 0; 
                })
            : state.allVideoGames.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
                return 0;
                });
            return {
            ...state,
                videogames: vgOrdered,
            };

        default:
            return state;
    }
}

 export default rootReducer;