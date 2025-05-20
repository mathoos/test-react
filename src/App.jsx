import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Missions from './pages/Missions';


function App() {
    
    return (
        <Router>
            <Routes>  
                <Route path="/" element={<Home/>}/> 
                <Route path="/missions" element={<Missions/>}/>    
            </Routes>
        </Router>
    );
}


export default App;


