import React, { Fragment, useState, useContext } from 'react';

// Import context
import ProjectContext from '../../context/projects/projectContext';

const NewProject = () => {

    //Obtener el state del formulario
    const projectContext = useContext(ProjectContext);
    const { form, errorform, showForm, addProject, showErrorForm } = projectContext;


    // State para Project
    const [project, setProject] = useState ({
        name: '',
    });

    // Extraer el nombre
    const { name } = project;

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
        if (name === '') {
            showErrorForm();
            return;
        }
        
        // Agregar los cambios al state
        addProject(project);

        // Reiniciar el formulario
        setProject({
            name: ''
        });
        
        
    }

    const onClickForm = () => {
        showForm();
    };


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
                { errorform ? <p className="alert alert-danger mt-2"> El nombre es obligatorio</p> : null}
            </div>
        </Fragment>
     );
}
 
export default NewProject;