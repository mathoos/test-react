function Interimaire({prenom, nom, dateDebut, dateFin}){
    return(
        <>
            <div>
                <p>{prenom} {nom}</p>
                <p>Du {dateDebut} au {dateFin}</p>
            </div>
        </>
    )
}

export default Interimaire