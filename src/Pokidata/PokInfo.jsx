import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokInfo.css'
import PokStatsandWeaks from "./PokStatsandWeaks";


const PokInfo = () => {

    const [pokDetails, setPokDetails] = useState(null)

    const [category, setCategory] = useState("")

    const [gender, setGender] = useState("");


    const { id } = useParams()

    useEffect(() => {

        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

        fetch(url)
            .then(res => res.json())
            .then(fullData => setPokDetails(fullData))
            .catch(err => console.error(err))

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            .then(res => res.json())
            .then(speciesData => {
                const englishGenus = speciesData.genera.find(
                    g => g.language.name === "en"
                );
                setCategory(englishGenus?.genus || "");

                // Gender
                const rate = speciesData.gender_rate;

                if (rate === -1) {
                    setGender("Genderless");
                } else {
                    const female = rate * 12.5;
                    const male = 100 - female;
                    setGender(`♂   /  ♀ `);
                }

            })
            .catch(err => console.error(err));
    }, [id])

    const capitalize = (str = "") =>
        str.charAt(0).toUpperCase() + str.slice(1);


    const formatId = (id) => {
        if (id < 10) {
            return `#000${id}`
        }
        else {
            return `#00${id}`
        }
    }

    const formatWeight = (hg) => ((hg / 10) * 2.20462).toFixed(1);

    // Convert decimeters to feet and inches
    const formatHeight = (dm) => {
        const meters = dm / 10;             // 1 dm = 0.1 m
        const totalFeet = meters * 3.28084; // meters → feet
        const feet = Math.floor(totalFeet); // whole feet
        const inches = Math.round((totalFeet - feet) * 12); // remaining inches
        return `${feet}' ${inches.toString().padStart(2, '0')}"`; // format like 2' 04"
    };

    const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};




    return (
        <div>
            <div className="Detailscontainer">
                <div className="Detailsitem">
                    <h1>{capitalize(pokDetails?.name)}</h1>
                    <h2 style={{ paddingTop: 6 }}>{formatId(pokDetails?.id)}</h2>
                </div>
                <div className="Pokqualities">
                    <img style={{paddingTop:"20px"}} src={pokDetails?.sprites.other["official-artwork"].front_default} alt="" />
                    <div>
                        <h2>Versions:</h2>
                        
                        <div className="pokthings">
                            <h4 style={{color:"black"}}>Height:<br />{formatHeight(pokDetails?.height)}</h4>
                            <h4 style={{color:"black"}}><strong>Category:<br /></strong> {category}</h4>
                            <h4 style={{color:"black"}}>Weight:<br />{formatWeight(pokDetails?.weight)} lbs</h4>
                            <h4 style={{color:"black"}}><strong>Abilities:<br />{pokDetails?.abilities[0].ability.name}</strong></h4>
                            <h4 style={{color:"black"}}><strong>Gender:<br /></strong><b>{gender}</b> </h4>
                        </div>
                       
                        <div>
                            <h2>Type</h2>
                            <div className="poktype">
                           
                           
                            <p style={{
                            width: 100,
                            height: 10,
                            padding: 10,
                            backgroundColor:typeColors[pokDetails?.types?.[0]?.type.name],
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"}}>
                                {pokDetails?.types[0].type.name}</p>
                            
                            {pokDetails?.types?.[1] && (
                            <p style={{
                                width: 100,
                                height: 10,
                                padding: 10,
                                backgroundColor: typeColors[pokDetails?.types[1].type.name],
                                borderRadius: 10,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"}}>{pokDetails?.types?.[1].type.name}</p>)}
                            </div>
                        </div>


                    </div>
                </div>
            <div className="pokstats">
                                <PokStatsandWeaks pokDetails={pokDetails}/>
                            </div>
            </div>
        </div>
    )
}
export default PokInfo