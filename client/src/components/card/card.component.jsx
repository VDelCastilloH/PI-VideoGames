import './card.styles.css';

function Card({vgame}){
    console.log(vgame);
    return (
        <div className='card-container'>
            {/* <img src= alt='Imagen de videogame' />  */}
            <h2>Nombre:</h2>
            <p>Genero:</p>
        </div>
    );
}

export default Card;