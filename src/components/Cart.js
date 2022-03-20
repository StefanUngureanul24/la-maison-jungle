function Cart() {
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
}

export default Cart