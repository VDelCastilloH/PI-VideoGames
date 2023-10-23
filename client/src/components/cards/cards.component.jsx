import Card from "../card/card.component";

import './cards.styles.css';

function Cards({vgames}){
    //console.log(vgames);
    const vgList = vgames;
    return (
        <div className="card-list">
            {vgList?.map((vgame)=>(
                <Card key = {vgame.id} vgame = {vgame}/>
            ))}
        </div>
    );
}

export default Cards;