import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
    const { user, logout } = useContext(AuthContext);

    return (
        <header>
            {user ? (
                <>
                    <span>Bienvenue, {user.name}</span>
                    <button onClick={logout}>Déconnexion</button>
                </>
            ) : (
                <span>Vous n'êtes pas connecté(e)</span>
            )}
        </header>
    );
}

export default Header