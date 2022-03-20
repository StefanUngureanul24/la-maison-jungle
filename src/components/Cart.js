import { useState } from 'react'

function Cart() {
    /*
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const fleursPrice = 15;

    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
        
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                <li>Lierre : {ivyPrice}€</li>
                <li>Fleurs : {fleursPrice}€</li>    
            </ul>
    
            <p>Total : {monsteraPrice + ivyPrice + fleursPrice}€</p>
        </div>
    )
    */

    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Close Shopping Cart</button>
            <h2>Panier</h2>
            <div>
                Monstera: {monsteraPrice}€
                <button onclick={() => updateCart(cart + 1)}>
                    Add
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>
                Empty shopping cart
            </button>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Open Shopping Cart</button>
    )
}

export default Cart