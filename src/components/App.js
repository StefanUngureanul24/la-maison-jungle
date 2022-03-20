import { useState } from 'react'

import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
  const [cart, updateCart] = useState([])
  
  return ( 
  <div> 
    <Banner />
    <Cart cart={cart} updateCart={updateCart} /> 
    <ShoppingList cart={cart} updateCart={updateCart} />
    <Footer />
  </div>
  )
}

export default App

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/