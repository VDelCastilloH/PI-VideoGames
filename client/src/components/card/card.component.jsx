import './card.styles.css';

function Card({vgame}){
    console.log(vgame);
    return (
        <div className='card-container'>
            <img className='img-vg' src = {vgame.image} alt='Imagen de videogame' /> 
            <h2>Nombre: {vgame.name} </h2>
            <p>Genero: </p>
        </div>
    );
}

export default Card;