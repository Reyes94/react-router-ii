import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Select from "react-select"

export default function Pokemones() {

    const [pokemones, setPokemones] = useState([])
    const [selected, setSelected] = useState()
    const navigate = useNavigate()

    const getData = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
            if (!response.ok) throw "ERROR AL ACCEDER A LA API"
            const data = await response.json()
            setPokemones(data.results)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])


    const handleClick = (name) => {
          navigate(`/pokemones/${name}`)                     //{name} es a la url que va a redirigir, según cada pokemo
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="pt-5">Selecciona un Pokemon</h1>
            <Select className="pokeSelect" placeholder={"pokemones"} options={pokemones.map(item => ({ label: item.name, value: item.name }))} onChange={(e)=> setSelected(e.value)}>
            </Select>
            <button onClick={()=> handleClick(selected)} className="mt-4 btn btn-dark">Ver detalle</button>
        </div>
    )
}


//<Select/> permite hacer un select con opciones clickeables o también con barra de búsqueda
//react-select no necesita key porque recibe otros parámetros {label, value}