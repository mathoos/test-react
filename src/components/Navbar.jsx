import { Link } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';

function Navbar() {
    const { users } = useUsers();

    return (
        <nav style={{ marginBottom: "1rem", padding: "1rem", backgroundColor: "#f0f0f0" }}>
            <div>
                {users.map(user => 
                    user.prenom).join(', ')
                }
            </div>
            <Link to="/">Accueil</Link> | 
            <Link to="/missions"> Missions</Link>
        </nav>
    );
}

export default Navbar;
