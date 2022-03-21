import { useState } from 'react'

import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

/*
const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]
*/
import { plantList } from '../datas/plantList'

/*
    Reduce to only obtain the value of the category variable of each plant in plantList
    Store the value in the categories variable

    Using map(), print all the categories 

    Then displaying all the PlantItem components
    Using the list in plantList.js
    Each variable of each element of the list
    Is sent as props to PlantItem
*/
function ShoppingList({ cart, updateCart }) {
    //var id_categ = 0
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) => 
            acc.includes(plant.name) ? acc : acc.concat(plant.category),
            []    
    )
    
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
        
    }

    return (
        /* 
            map(element => (action for that element))
        */
        
            /*
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
        */

        /*
            !!!!To fix later - warning for cateogires key
        */
        <div>
            <Categories 
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
        
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) => 
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem 
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>
                                Add
                            </button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}
export default ShoppingList