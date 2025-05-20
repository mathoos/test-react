import { useState } from "react";
import { useUsers } from "../hooks/useUsers"
import Interimaire from "../components/Interimaire";
import Navbar from "../components/Navbar"

function Missions() {

    const utilisateurs = [
        { firstname: "Luke", lastname: "Skywalker" },
        { firstname: "Leia", lastname: "Organa" },
        { firstname: "Han", lastname: "Solo" }
    ]

    const utilisateursName = utilisateurs.map((name) => {
        return name.firstname
    })

    console.log(utilisateursName)















    const { users, status, error } = useUsers();
    const [searchUser, setSearchUser] = useState("");

    // On affiche la date au format jj/mm/aaaa
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("fr-FR");
    };

    const sortByDate = (users) =>
        [...users].sort((a, b) => new Date(b.dateDebut) - new Date(a.dateDebut));

    const handleChange = (e) => {
        setSearchUser(e.target.value);
    };

    

    if (status === "loading") return <p>Chargement en cours...</p>;
    if (status === "failed") return <p>Erreur : {error}</p>;

    const filteredUsers = sortByDate(users).filter((user) => {
        const fullName = `${user.prenom} ${user.nom}`.toLowerCase();
        return fullName.includes(searchUser.toLowerCase());
    });

    return (
        <>
            <Navbar/>
            <input
                type="text"
                placeholder="Rechercher un intérimaire..."
                value={searchUser}
                onChange={handleChange}
            />

            <div>
                {filteredUsers.map(({ id, prenom, nom, dateDebut, dateFin }) => (
                    <Interimaire
                        key={id}
                        prenom={prenom}
                        nom={nom}
                        dateDebut={formatDate(dateDebut)}
                        dateFin={formatDate(dateFin)}
                    />
                ))}
            </div>
        </>
    );
}

export default Missions;
