import React from 'react';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from "./components/Header";
import Login from './components/Login';
import './App.css';
import HOme from './components/HOme';
import WAtchlist from './components/WAtchlist';
import SEries from './components/SEries';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>

          <Route  path='/' element={<Login/>} >
          </Route>
          <Route path='/home' element={<HOme/>}>
          
          </Route>
          <Route path="/watchlist" element={<WAtchlist/>}>
            
          </Route>
          <Route path="/series" element={<SEries/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;

