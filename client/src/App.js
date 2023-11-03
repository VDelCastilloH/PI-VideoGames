import { Route,Routes } from 'react-router-dom';

import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';
import Landing from './views/landing/landing.component';
import Home from './views/home/home.component';

import axios from 'axios';
//axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://videogames-4dx6.onrender.com'

function App() {  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Landing/>}/>  
        <Route path='/home' element = {<Home/>}/>  
        <Route path='/videogames/:id' element = {<Detail/>}/>  
        <Route path='/create' element = {<Create/>}/>  
      </Routes>
    </div>
  );
}

export default App;
