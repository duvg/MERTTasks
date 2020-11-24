import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

    // Extraer el proyecto actual datos del state
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

    // Si no hay proyecto seleccionado
    if ( ! project ) return null;

    // Array destructuring para extraer el proyecto seleccionado por el usuario
    const [actualProject] = project;

    return ( 
        <div className="container">
            <div className="row justify-content-center contentFormTasks py-4">
                <div className="col-md-6">
                    <div className="formTask">
                        <h2>Agregar una Tarea</h2>
                        <form>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de la tarea"
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    value="Agregar Tarea"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FormTask;