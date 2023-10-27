import { GET_VIDEOGAMES, 
        GET_VG_BY_NAME, 
        GET_DETAIL, 
        CLEAN_DETAIL,
        ORDER_BY_NAME,
        GET_GENRES,
        ORDER_BY_RATING,
        FILTER_BY_GENRE,
        FILTER_BY_SOURCE } from "./action-types";

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

        case ORDER_BY_RATING:
            const ratingOrdered = action.payload === 'MIN' ?
            state.allVideoGames.sort((a,b) => {
                if (a.rating > b.rating) return 1;
                if (b.rating > a.rating) return -1;
                return 0;
            })
            : state.allVideoGames.sort((a, b) => {
                if (a.rating > b.rating) return -1;
                if (b.rating > a.rating) return 1;
                return 0;
            });
            return {
                ...state,
                videogames: ratingOrdered,
            };
        
        case FILTER_BY_GENRE:
            const genre = action.payload
            if(action.payload === "All") state.videogames = state.allVideoGames
            else {
                state.videogames = state.allVideoGames.filter(vg => vg.genres?.includes(genre))
                if(state.videogames.length === 0) {
                alert(`😢 No videogames were found with the selected genre`)
                state.videogames = state.allVideoGames
                }
            }
            return {
                ...state,
                videogames: state.videogames
            }; 

        case FILTER_BY_SOURCE:
            const Vg = state.allVideoGames;
            const source = action.payload === 'DB' ? Vg.filter(vg => vg.createdDB)
            : Vg.filter(vg => { if(!vg.hasOwnProperty("createdDB")) return vg});
            return {
                ...state,
                videogames: action.payload === 'All' ? Vg : source
            };
        
        default:
            return state;
    }
}

 export default rootReducer;