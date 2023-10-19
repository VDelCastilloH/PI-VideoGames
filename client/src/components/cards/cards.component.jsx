import Card from "../card/card.component";

import './cards.styles.css';

function Cards({allVideogames}){

    const vgList = allVideogames;

    return (
        <div className="card-list">
            {vgList?.map((vgame)=>(
                <Card vgame = {vgame}/>
            ))}
        </div>
    );
}

export default Cards;