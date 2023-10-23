import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getVgByName } from '../../redux/actions';
import './navbar.styles.css';

function Navbar(){
    const dispatch = useDispatch();
    
    let [name, setName] = useState('');
    
    //const videogames = useSelector((state)=>state.videogames);
    //console.log(videogames);

    function handleInput(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getVgByName(name));
        setName('');
    }

    return (
        <nav className='navbar'>
            <div className='nav-container'>
                <Link to='/'>
                    <button className='btn'>Welcome Page</button>
                </Link>
                <Link to='/create'>
                    <button className='btn'>Create</button>
                </Link>
                <form>
                    <input className="in-buscar" 
                    type="search" 
                    placeholder="🔎"
                    onChange={(e)=> handleInput(e)}
                    onKeyDown={(e)=> e.key === "Enter" && handleSubmit(e)}
                    value={name}
                    name={name}/>
                    <button className="btn"
                    type='submit'
                    onClick={(e) => handleSubmit(e)}><b>Search</b></button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;