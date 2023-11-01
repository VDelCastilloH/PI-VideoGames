import { GET_VIDEOGAMES, 
        GET_VG_BY_NAME, 
        GET_DETAIL, 
        CREATE_VIDEOGAME,
        CLEAN_DETAIL,
        ORDER_BY_NAME,
        GET_GENRES,
        ORDER_BY_RATING,
        FILTER_BY_GENRE,
        FILTER_BY_SOURCE,
        SET_PAGE } from "./action-types";

const initialState = {
    allVideoGames:[],
    videogames:[],
    prevFilter:[],
    gamesByName:[],
    genres:[],
    detail:[],
    currentPage: 1,
};

 function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_VIDEOGAMES:
            return{
                ...state, 
                allVideoGames: action.payload,
                videogames: action.payload,
                prevFilter: action.payload,
                gamesByName: action.payload, 
            };
            
        case GET_VG_BY_NAME:
            return{
                ...state, 
                videogames: action.payload,
                gamesByName: action.payload,
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

        case CREATE_VIDEOGAME:
            return{
                ...state, 
                allVideoGames: [...state.allVideoGames, action.payload ]
            }; 

        case CLEAN_DETAIL:
            return{
                ...state, 
                detail: action.payload,
            };
        
        case ORDER_BY_NAME:     
            const vgOrdered = action.payload === "ASC"? 
                state.videogames.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
                return 0; 
                })
            : state.videogames.sort(function (a, b) {
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
            state.videogames.sort((a,b) => {
                if (a.rating > b.rating) return 1;
                if (b.rating > a.rating) return -1;
                return 0;
            })
            : state.videogames.sort((a, b) => {
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
            if(action.payload === "All") state.videogames = state.gamesByName
            else {
                if(state.videogames.length<state.gamesByName.length)
                    state.videogames = state.gamesByName;
                let filter = state.videogames.filter(vg => vg.genres?.includes(genre))
                state.videogames = filter
            }
            return {
                ...state,
                videogames: state.videogames,
                prevFilter: state.videogames,
            }; 

        case FILTER_BY_SOURCE:
            let Vg = state.videogames;
            let source = [];
            switch (action.payload) {
                case "DB":
                    if(Vg.length<state.prevFilter.length)
                        Vg = state.prevFilter
                    source = Vg.filter(vg => vg.createdDB)
                    break;
                case "API":
                    if(Vg.length<state.prevFilter.length)
                        Vg = state.prevFilter
                    source = Vg.filter(vg => !vg.createdDB)
                    break;
                case "All":
                    source = state.prevFilter
                    break;
                default:
                    break;
            }
            
            return {
                ...state,
                videogames: source,
            };
        
        case SET_PAGE:
            return { 
                ...state, 
                currentPage: action.payload
            };
        
        default:
            return state;
    }
}

 export default rootReducer;