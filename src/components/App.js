import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'


import Navbar from './Navigation/Navbar';
import FoodMenu from './FoodMenu';

function App() {
  return (
    <div className="App">
        <Navbar />

        <div style={{padding: 20}}>
            <h1 className="text-center">Category menu</h1>
            <p className="lead mt-3 mb-4 text-center">Scrolls on mobile, adjusts to sub menu revealable when more is clicked on desktop</p>
        </div>
        
        <FoodMenu />
    </div>
  );
}

export default App;

