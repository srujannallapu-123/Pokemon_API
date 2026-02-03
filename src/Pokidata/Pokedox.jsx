import { useEffect, useState } from "react"
import './Pokedox.css'
import PokDetails from "./PokDetails"
import { Link } from "react-router-dom"


const Pokedox = () => {

    const [pokiData, setPokiData] = useState([])

    useEffect(() => {

        const url = "https://pokeapi.co/api/v2/pokemon"

        fetch(url)
            .then(res => res.json())
            .then(data => {
                return Promise.all(
                    data.results.map(pokemon =>
                        fetch(pokemon.url)
                            .then(res => res.json())
                    )
                );
            })
            .then(fullData => setPokiData(fullData))

            .catch(err => console.error(err))
    }, [])


    return (
        <div className="pokcontainer">
            {pokiData?.map(pokitem =>
               (

                   <Link style={{textDecoration:"none", color:"black"}} to={`/pokinfo/${pokitem.id}`}><PokDetails pokitem ={pokitem}/></Link>
               )

            )}
        </div>
    )
}
export default Pokedox