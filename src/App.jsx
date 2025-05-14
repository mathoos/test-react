import { useEffect} from 'react';
import Header from "./components/Header"

function App() {


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('L’élément est visible !')
                }
            })
        })

        const el = document.getElementById('section')
        if (el) observer.observe(el)

        return () => observer.disconnect()
    }, [])




    return(
        <>
            <div>
                <Header/>
                <div id="section"></div>
            </div>
        </>
    )
}

export default App



