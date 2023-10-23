import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';

import imagevg from '../../img/videogame.jpeg'
import './landing.styles.css';

function Landing() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getVideogames());
  },[dispatch]);

  return (
    <div className="landing-page">
      <header className="header">
        <h1>Proyecto Individual Video-Games</h1>
      </header>
      <main className="main-content">
        <img src={imagevg} alt="Landing" className="landing-image" />  
        <h2>WebPT14b - Victor Del Castillo</h2>
        <Link to='/home'><button className="btn-empezar">Empezar</button></Link>
      </main>
    </div>
  );
}

export default Landing;
