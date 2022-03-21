import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
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

    //const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )
    
    useEffect(() => {
        document.title = `${total} purchases made`
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                onClick={() => setIsOpen(false)}
            >
                Close Shopping Cart
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>
                        Total: {total}€
                    </h3>
                    <button onClick={() => updateCart([])}>
                        Empty the cart
                    </button>
                </div>
            ) : (
                <div>
                    Your cart is empty
                </div>
            )}
        </div>    
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Open the cart
            </button>
        </div>
    )
    
}

export default Cart