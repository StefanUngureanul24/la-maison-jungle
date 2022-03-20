import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

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
function ShoppingList() {
    var id_categ = 0
    const categories = plantList.reduce(
        (acc, plant) => 
            acc.includes(plant.name) ? acc : acc.concat(plant.category),
            []    
    )
    
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
            <ul>
                {categories.map((cat, index) => (
                    <li key={`${cat}-${index}`}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList