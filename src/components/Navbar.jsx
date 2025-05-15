import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link> | 
            <Link to="/about">À propos</Link> | 
            <Link to="/contact">Contact</Link> |
            <Link to="/article/:id">Article</Link>
        </nav>
    )
}

export default Navbar