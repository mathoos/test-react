import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
    const { user, login } = useContext(AuthContext);

    if (user) {
        return <p>Bienvenue sur ton profil, {user.name} !</p>;
    }

    return (
        <>
            <p>Connecte-toi pour voir ton profil.</p>
            <button onClick={() => login("Julie")}>Se connecter</button>
        </>
    );
}

export default Profile