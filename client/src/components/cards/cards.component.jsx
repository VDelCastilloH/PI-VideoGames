import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../card/card.component";

import {getGenres, orderByName} from '../../redux/actions'

import './cards.styles.css';

function Cards({vgames}){
    
    const dispatch = useDispatch();
    const allGenres = useSelector((state)=>state.genres);

    const [order,setOrder] = useState(false);

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    function handlerOrderByName(e){
        dispatch(orderByName(e.target.value));
        setOrder(!order);
    }

    function handlerOrderByRating(e){

    }

    function handlerFilterByGenre(e){

    }

    function handlerFilterSource(e){

    }

    return (
        <div className="cards-cont">
            <div className="filters-cont">
                <select className="order" onChange={(e)=>handlerOrderByName(e)}>
                    <option className="option" disabled selected>Order by alphabeth</option>
                    <option value="ASC">From A to Z</option>
                    <option>From Z to A</option>
                </select>
                <select className="order" onChange={(e)=> handlerOrderByRating(e)}>
                    <option className="option" disabled selected> Order by Rating </option>
                    <option value="MIN">Worst Rated</option>
                    <option value="MAX">Best Rated</option>
                </select>
                <select className="option" onChange={(e) => handlerFilterByGenre(e)}>
                    <option value="All" disabled selected> Filter by Genre </option>
                    {allGenres?.map((g) => (<option key={g.name} value={g.name}>
                    {g.name[0].toUpperCase() + g.name.slice(1)}</option>))}
                </select>
                <select className="option" onChange={(e) => handlerFilterSource(e)}>
                    <option value="All" disabled selected> {" "} Filter by Source{" "} </option>
                    <option value="DB"> Created </option>
                    <option value="API"> From API </option>
                </select>
            </div>
            <br />
            {/* <Pagination videogamesPerPage={videogamesPerPage}
                allVideogames={allVideogames.length}
                paginado={paginado}
                currentPage={currentPage}
                setPage={setPage}/>
            <div className={style.cardBox}>
                {currentGames.length > 0 ? (
                currentGames.map((game) => {
                return (
                    <NavLink
                        key={game.id}
                        to={`/videogames/${game.id}`}
                        style={{ textDecoration: "none" }}>
                    <Card
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        rating={game.rating}
                        background_image={game.background_image}
                        genres={game.genres}
                    />
                    </NavLink>);
                })) 
                : (<span className={style.loader}></span>)}
            </div> */}
            <div className="card-list">
                    {vgames?.map((vgame)=>(
                        <Card key = {vgame.id} vgame = {vgame}/>
                    ))}
            </div>
        </div>
    );
}

export default Cards;