import React, { Fragment, useState, useContext } from 'react';

// Import context
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    //Obtener el state del formulario
    const projectsContext = useContext(projectContext);
    const { form, showForm } = projectsContext;


    // State para Project
    const [project, setProject] = useState ({
        name: '',
    });

    // cambios en los campos del formulario
    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    // Cuado el usuario envia un proyecto
    const onSubmitProject = e => {
        e.preventDefault();

        // Validar el proyecto
        // TODO: Validar el proyecto
        
        // Agregar los cambios al state
        // TODO: Agregar los cambios al state

        // Reiniciar el formulario

        // TODO: Limpair el formulario
        
    }

    const onClickForm = () => {
        showForm();
    };

    // Extraer el nombre
    const { name } = project;

    return ( 
        <Fragment>
            <div className="formProject">
                <button
                    className="btn btn-primary btn-block my-5"
                    onClick={onClickForm}
                >
                    Nuevo Proyecto
                </button>

                {
                    form 
                    ? 
                        (
                            <form 
                                className="mb-5"
                                onSubmit={onSubmitProject}
                            >
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Nuevo proyecto"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={onChangeProject}
                                />

                                <input
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    value="Agregar proyecto"
                                />
                            </form>
                        ) : null
                        

                }
            </div>
        </Fragment>
     );
}
 
export default NewProject;