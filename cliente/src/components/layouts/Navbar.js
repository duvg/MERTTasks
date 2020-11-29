import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light customNavbar">
            <div className="container-fluid">

                <strong>Hola Yamid</strong>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-link-c" href="/#">Cerrar Sesión</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;