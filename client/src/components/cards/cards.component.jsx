import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Card from "../card/card.component";
import Pagination from '../Pagination/pagination.component';
import { getVideogames,
         getGenres, 
         orderByName,
         orderByRating,
         filterByGenre,
         filterBySource,
         setPage} from '../../redux/actions'

import './cards.styles.css';

function Cards(){
    
    const dispatch = useDispatch();
    const allGenres = useSelector((state)=>state.genres);
    const currentPage = useSelector((state)=>state.currentPage);
    const vgames = useSelector((state)=>state.videogames)
    const itemsPerPage = 15;

    //------------------Paginacion--------------------------------
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = vgames.slice(startIndex, endIndex);

    const [order,setOrder] = useState(false);

    const [oByName, setOByName] = useState('default'); 
    const [oByRating, setOByRating] = useState('default'); 
    const [fByGenre, setFByGenre] = useState('All'); 
    const [fBySource, setFBySource] = useState('All');


    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    function handlerOrderByName(e){
        dispatch(setPage(1));
        setOByName(e.target.value);
        setOByRating('default');
        // setFByGenre('All');
        // setFBySource('All');
        dispatch(orderByName(e.target.value));
        setOrder(!order);
    }

    function handlerOrderByRating(e){
        dispatch(setPage(1));
        setOByName('default');
        setOByRating(e.target.value);
        // setFByGenre('All');
        // setFBySource('All');
        dispatch(orderByRating(e.target.value));
        setOrder(!order);
    }

    function handlerFilterByGenre(e){
        dispatch(setPage(1));
        setOByName('default');
        setOByRating('default');
        setFByGenre(e.target.value);
        setFBySource('All');
        dispatch(filterByGenre(e.target.value));
    }

    function handlerFilterSource(e){
        dispatch(setPage(1));
        setOByName('default');
        setOByRating('default');
        // setFByGenre('All');
        setFBySource(e.target.value);
        dispatch(filterBySource(e.target.value));
    }

    function handleAllVg(e){
        dispatch(getVideogames());
        dispatch(setPage(1));
        setOByName('default');
        setOByRating('default');
        setFByGenre('All');
        setFBySource('All');
    }

    return (
        <div className="cards-cont">
            <div className="filters-cont">
                <select className="order" onChange={(e)=>handlerOrderByName(e)} value={oByName}>
                    <option value= "default" className="option" disabled selected>Order by alphabeth</option>
                    <option value="ASC">From A to Z</option>
                    <option value="DES">From Z to A</option>
                </select>
                <select className="order" onChange={(e)=> handlerOrderByRating(e)} value={oByRating}>
                    <option value= "default" className="option" disabled selected> Order by Rating </option>
                    <option value="MIN">⬇ Worst Rated</option>
                    <option value="MAX">⬆ Best Rated</option>
                </select>
                <select className="option" onChange={(e) => handlerFilterByGenre(e)} value={fByGenre}>
                    <option value="All"> Filter by Genre (All) </option>
                    {allGenres?.map((g) => (<option key={g.name} value={g.name}>
                    {g.name[0].toUpperCase() + g.name.slice(1)}</option>))}
                </select>
                <select className="option" onChange={(e) => handlerFilterSource(e)} value={fBySource}>
                    <option value="All"> Filter by Source (All) </option>
                    <option value="DB"> Created </option>
                    <option value="API"> From API </option>
                </select>
                <button className="btn"
                    onClick={(e) => handleAllVg(e)}><b>All Videogames</b></button>
            </div>
            <Pagination/>
            <div className="card-list">
                    {itemsToDisplay?.map((vgame)=>(
                        <Card key = {vgame.id} vgame = {vgame}/>
                    ))}
            </div>
            <div className='line'>
                <Pagination/>
            </div>
        </div>
    );
}

export default Cards;