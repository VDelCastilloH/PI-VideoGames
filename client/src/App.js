import { Route,Routes } from 'react-router-dom';

import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';
import Landing from './views/landing/landing.component';
import Home from './views/home/home.component';

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
