import CareScale from './CareScale'
import '../styles/PlantItem.css'

/* 
    Function to practice the onClick event
*/
function handleClick(e) {
    e.preventDefault()
    alert(`${e.toUpperCase()} ajouté`)
}

/* 
    The props are given in ShoppingList.js

    Props:
        id as key to guarantee each item's uniqueness
        cover to display the picture imported in plantList.js
        name to simply display the name
        water for scaling the water quantity required for the plant
        light for scaling the light quantity required for the plant

    <CareScale /> passing props to CareScale.js 
*/
function PlantItem({ id, cover, name, water, light }) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem