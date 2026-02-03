

const PokDetails = ({pokitem})=>{

  const formatId = (id) => {
        if (id < 10) {
            return `#000${id}`
        }
        else {
            return `#00${id}`
        }
    }

     const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


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





    return(
         <div className="pokitems">
                    <img style={{ width: 200 }} src={pokitem.sprites.other["official-artwork"].front_default} />
                    <div className="pokdetails">
                        <div>

                            {formatId(pokitem.id)}</div>
                        <div style={{ fontWeight: 500, fontSize: 40 }}>{capitalize(pokitem.name)}</div>
                    </div>
                    <div className="poktypes">
                        <p style={{
                            width: 60,
                            height: 10,
                            padding: 10,
                            backgroundColor:typeColors[pokitem.types[0].type.name],
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }} >{pokitem?.types[0].type.name}</p>


                        {
                            pokitem?.types[1] &&
                            <p style={{
                                width: 60,
                                height: 10,
                                padding: 10,
                                backgroundColor: typeColors[pokitem.types[1].type.name],
                                borderRadius: 10,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} >
                                {pokitem?.types[1].type.name}</p>
                        }
                    </div>


                </div>
    )
}
export default PokDetails