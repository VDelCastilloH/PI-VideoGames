import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

function Home() {
    return (
      <div className="Home">
        <h1>Esta es la Home Page</h1>
        <Navbar/>
        <Cards/>
      </div>
    );
  }
  
export default Home;