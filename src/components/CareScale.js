import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

// au lieu de function CareScale(props)
/* 
    scaleValue: value of light/water required for the plant
    careType: variable to decide whether it's water or light

    Use the list range to print the number of photos 
    according to water/light value

    Example:
        First element: Monstera
            Water: 3
            Light: 2
        First Caretype type=water value=3
        Pick the water-icon.jpg with scaleType
        For each element of range:
            Next iterations:                 
                scaleValue >= rangeElem (3 >= 1) : true -> print span
                scaleValue >= rangeElem (3 >= 2) : true -> print span
                scaleValue >= rangeElem (3 >= 3) : true -> print span 
        Second Caretype type=light value=2
        Pick the sun-icon.jpg with scaleType
        For each element of range:
            Next iterations:
                scaleValue >= rangeElem (2 >= 1): true -> print span
                scaleValue >= rangeElem (2 >= 2): true -> print span
                scaleValue >= rangeElem (2 >= 3): false -> null
*/
function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    )

    return (
        <div>
            {range.map((rangeElem) => 
            scaleValue >= rangeElem ? (
                <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale