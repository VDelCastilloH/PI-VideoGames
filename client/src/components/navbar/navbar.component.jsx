import './navbar.styles.css';

function Navbar(){
    return (
        <div className='nav-container'>
            <form action="">
                <input className="in-buscar" type="text" placeholder="Busqueda" />
                <button className="btn-buscar">Buscar</button>
            </form>
        </div>
    );
}

export default Navbar;