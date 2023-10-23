import { useEffect } from "react";
import { useSelector} from 'react-redux';

import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

import './home.styles.css';

function Home() {
  
  //const allVideoGames = useSelector((state)=> state.allVideoGames);
  const filtered = useSelector((state)=> state.videogames)
    
  //console.log(allVideoGames);

  useEffect(()=>{
  },[filtered]);

    return (
      <div className="home">
        <h1>VIDEOGAMES</h1>
        <Navbar/>
        <Cards vgames={filtered} />
      </div>
    );
  }
  
export default Home;