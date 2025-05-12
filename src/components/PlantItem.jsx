function PlantItem({name, category, price}){
    return(
        <>
            <li>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>{price}</p>
            </li>
        </>
    )
}

export default PlantItem