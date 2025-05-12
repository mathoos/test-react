function PlantItem({id, name, category, price}){
    return(
        <>
            <li key={id}>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>{price}</p>
            </li>
        </>
    )
}

export default PlantItem