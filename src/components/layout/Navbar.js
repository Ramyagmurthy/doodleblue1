import React from "react";
import { NavLink, Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <div className="container-fluid">
               
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Contact List</NavLink>
                        </li>
                    </ul>
                 </div>
                 <Link className="btn btn-outline-light" to="/users/add">Add Contact</Link>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;