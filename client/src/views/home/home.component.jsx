import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getVideogames } from "../../redux/actions";

import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

import './home.styles.css';

function Home() {
  const dispatch = useDispatch();
  const allVideogames = useSelector((state)=>state.allVideogames);

  useEffect(()=>{
    dispatch(getVideogames());
  },[dispatch]);

    return (
      <div className="home">
        <h1>Home</h1>
        <Navbar/>
        <Cards allVideogames={allVideogames} />
      </div>
    );
  }
  
export default Home;