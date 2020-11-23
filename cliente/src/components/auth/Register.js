import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    // etado para iniciar sesion
    const [user, setUser] = useState ({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

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

        // Password minimo de 6 caracteres

        // Los 2 passwords deben ser iguales

        // Pasar al action
    }


    return ( 
        <div className="container-fluid loginBackground" >
            <div className="row justify-content-center align-conntent-center" style={{ height: "100vh"}}>
                <div className="col-md-4 my-auto">
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