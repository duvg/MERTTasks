import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {

    // Extraer los valores del context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, logIn } = authContext;

    // En caso de que el usuario o password no existan
    useEffect(() => {
        
        if (authenticated || localStorage.getItem('authenticated')) {
            props.history.push('/projects');
        }

        if (message) {
            showAlert(message.msg, message.category);
        }
    }, [message, authenticated, props.history]);

    // estado para iniciar sesion
    const [user, setUser] = useState ({
        email: '',
        password: ''
    })

    // extraer los datos de usuario
    const { email, password } = user;


    // cambios en los campos del formulario
    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuairo requiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if (email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'danger');
        }

        // Pasar al action
        logIn({ email, password});
    }


    return ( 
        <div className="container-fluid loginBackground" >
            <div className="row justify-content-center align-conntent-center" style={{ height: "100vh"}}>
                <div className="col-md-4 my-auto">
                    { alert ? (<div className={`alert alert-${alert.category} my-2`}>{alert.msg}</div>) : null}    
                    <form className="formLogin" onSubmit={onSubmit}>
                        <h2>Iniciar sesion</h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="form-control"
                                name="email"
                                type="email"
                                value={email}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                className="form-control"
                                name="password"
                                type="password"
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-3">Iniciar Sesión</button>
                        <Link to={'/register'} >
                            No tienes una cuenta?,  Registrate!
                        </Link>
                    </form>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Login;