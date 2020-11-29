import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Register = (props) => {

    // Extraer los valores de context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser } = authContext;

    // etado para iniciar sesion
    const [user, setUser] = useState ({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });
    
    // En caso de que el usuario se haya autenticado, registrado o sea un registro duplicado
    useEffect(() => {
        if(authenticated || localStorage.getItem('authenticated')) {
            props.history.push('/projects');
        }

        if(message) {
            showAlert(message.msg, message.category);
        }

    }, [message, authenticated, props.history]);

    // extraer los datos de usuario
    const { name, email, password, confirm } = user;


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
        if ( name.trim() === '' || 
             email.trim() === '' || 
             password.trim() === '' || 
             confirm.trim() === ''
        ) {
            showAlert('Todos los campos son obligatorios', 'danger');   
            return;
        }

        // Password minimo de 6 caracteres
        if (password.length < 6 ) {
            showAlert('El passsword debe ser de almenos 6 caracteres', 'danger');
            return;
        }

        // Revisar que los password sean iguales
        if (password !== confirm) {
            showAlert('Los passwords no coinciden', 'danger');
            return;
        } 

        // Pasar al action
        registerUser({
            name,
            email,
            password
        });
    }


    return ( 
        <div className="container-fluid loginBackground">
                
            

            <div className="row justify-content-center align-conntent-center" style={{ height: "100vh"}}>
            
                <div className="col-md-4 my-auto">
                    { alert ? (<div className={`alert alert-${alert.category} my-2`}>{alert.msg}</div>) : null}        
                    <form className="formLogin" onSubmit={onSubmit}>
                        <h2 className="text-center">Registrarme</h2>

                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                id="name"
                                className="form-control"
                                name="name"
                                type="text"
                                value={name}
                                placeholder="tu nombre"
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="form-control"
                                name="email"
                                type="email"
                                value={email}
                                placeholder="email@example.com"
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
                                placeholder="12E@dae..."
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cofirm">Confirmar Password</label>
                            <input
                                id="cofirm"
                                className="form-control"
                                name="confirm"
                                type="password"
                                value={confirm}
                                placeholder="12E@dae..."
                                onChange={onChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3">Registrarme</button>
                        <Link to={'/'} >
                            Ya una cuenta?,  Inicia sesion!
                        </Link>
                    </form>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Register;