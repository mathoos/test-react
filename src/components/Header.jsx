import "./Header.scss"

let title = "Bonjour les gens"

function Header({children}){
    return(
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    )
}

export default Header;