import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Navbar = () => {

    const authContext = useContext(AuthContext);
    const { user, userAuthenticated, logOut } = authContext;

    useEffect(() => {
        userAuthenticated();
    }, []);


    return ( 
        <nav className="navbar navbar-expand-lg navbar-light customNavbar">
            <div className="container-fluid">
            { user ? <strong>Hola { user.name }</strong> : null }
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <button 
                                className="nav-link nav-link-c cerrar-sesion"
                                onClick={() => logOut() }
                            >Cerrar Sesión</button>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;