import './landing.styles.css';
import imagevg from '../../img/videogame.jpeg'
import {Link} from 'react-router-dom';

function Landing() {
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
