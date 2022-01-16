import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
    <Routes> 
        <Route path="/checkout" element={<><Header/>Checkout</>}/>
        {/* How to render two components simultaneously*/}
        <Route path="/" element={<><Header/><Home/></>}/> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
