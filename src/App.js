
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import * as React from 'react'
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import CollapsibleExample from './component/Navbar/NavbarMio';
import About from './component/about/about';

function App() {
  return (
     <div className="App">
      <BrowserRouter>
        <CollapsibleExample/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
