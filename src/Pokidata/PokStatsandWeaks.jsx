
import './Pokedox.css'


const PokStatsandWeaks = ({ pokDetails }) => {



    return (
        <div>
            <div className="vStatsBox">
                <h3>Stats</h3>

                <div className="vStatsGrid">
                    {pokDetails?.stats.map((item) => (
                        <div className="vStatItem" key={item.stat.name}>
                            <div className="vBar">
                                <div
                                    className="vBarFill"
                                    style={{ height: `${(item.base_stat / 150) * 100}%` }}
                                />
                            </div>

                            <span className="vStatLabel">
                                {item.stat.name.replace("-", " ")}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
export default PokStatsandWeaks