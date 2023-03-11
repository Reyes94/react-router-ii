import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FakePromise } from "../components/FakePromise"

export default function CardPokemon() {

    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()

    const getData = async () => {
        try {
            await FakePromise()              //antes que se obtenga info del pokemon seleccionada, tiempo a esperar
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            if (!response.ok) throw navigate("/pokemones")   //redirecciones a pokemones, en caso que no se seleccione un pokemon o que se ingrese por url uno que no esté en la lista
            const data = await response.json()
            setPokemon(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) return (                                               //antes de cargar la info de cada pokemon se mostrará un gif. En caso que no se seleccione ninguno, de igual forma lo mostrará para después redireccionar a sección Pokemones
        <div className="mt-5 d-flex justify-content-center">           
            <div>
                <img src="/loading.gif" alt="" className="gif" />
            </div>
        </div>
    )
                              //si se selecciona correctamente un pokemon, y se accede a la API, se desplegará:
    return (
        <div className="container">
            <div className="mt-5 d-flex justify-content-center">
                <div className="card mb-3" style={{ width: "570px" }}>
                    <div className="row g-0">
                        <div className="col-md-4 p-3 text-center" >
                            <img src={pokemon.sprites.other['dream_world'].front_default} className="rounded img-size" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-center">{pokemon.name}</h5>
                                <div className="container d-flex justify-content-evenly mt-4 mb-4">

                                    {pokemon.types.map((item) => {           //para mostrar a qué tipo de pokemon pertenece
                                        return (
                                            <p
                                                key={item.type.url}
                                                className={`text-light fw-bold fs-5 ${item.type.name}`} //se accede a clase CSS por cada tipo de Pokemon
                                            >
                                                {item.type.name.charAt(0).toUpperCase() +           //primera letra en Mayus y el resto en minúscula
                                                    item.type.name.substr(1).toLowerCase()}
                                            </p>
                                        );
                                    })}
                                </div>
                                <ul className="m-5  list-unstyled text-center">
                                    {pokemon.stats.map((item) => (         //map de atributos
                                        <li className="text-justify" key={Math.random()}>{item.stat.name}: {item.base_stat}</li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">                                      
                <button className="btn btn-secondary" onClick={() => {
                    navigate('/pokemones');                                      //redireccionar para seleccionar un nuevo pokemon
                }}> Volver a la selección</button>
            </div>
        </div>
    )

}