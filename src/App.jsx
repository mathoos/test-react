
import Header from "./components/Header.jsx";
import PlantItem from "./components/PlantItem.jsx"


function App() {
    return (
        <>
            <Header/>
            <ul>
            {PlantList.map((plant) => (
    <PlantItem
        key={plant.id}
        id={plant.id}
        name={plant.name}
        category={plant.category}
        price={plant.price}
    />
))}

            </ul>
        </>
    )
}



export default App