import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';

function Card({vgame}){
    return (
        <div className='card-container'>
            <Link className='card' to={`/videogames/${vgame.id}`}>
                <img className='img-vg' src = {vgame.image} alt='Imagen de videogame' /> 
                <h2>{vgame.name}</h2>
                <h3>RATING: ⭐{vgame.rating}</h3>
                <p><b>GENEROS: {vgame.genres?.map((g) => g).join(", ") || "genres not found"} </b></p>
            </Link>
        </div>
    );
}

export default Card;