import Header from "./components/Header.jsx";
import {PlantList} from "./data/PlantList.jsx";
import PlantItem from "./components/PlantItem.jsx";


function App() {
    return (
        <>
            <Header>
                <p>Bienvenue sur notre catalogue de plantes !</p>
            </Header>
            <ul>
                {PlantList.map(({id, name, category, price}) => (
                    <PlantItem
                        key={id}
                        name={name}
                        category={category}
                        price={price}
                    />
                ))}
            </ul>
        </>
    )
}


export default App