import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            <img className="logo-navbar px-3" width="75" src="/icon.png"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active-class" : "link"}>Home</NavLink>  
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pokemones" className={({ isActive }) => isActive ? "active-class" : "link"}>Pokemones</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

//<NavLink> se modifica clase Active por defecto, si el link está activo se muestra clase creada "active-class" sino, la clase creada "link". No se usa "undefined" para darle estilo propio.