import React, { Fragment, useContext } from 'react';
import Task from './Task';

import projectContext from '../../context/projects/projectContext';

const ListTasks = () => {

    // Extraer del state el proyecto actual
    const projectsContext = useContext(projectContext);
    const { project, deleteProject} = projectsContext;

    // Si no hay un proyecto seleccinado 
    if ( ! project ) return  <h2>Selecciona un proyecto</h2>;

    // Array destructiring para extraer el proyecto
    const [actualProject] = project;

    const tasks = [
        { id: 1, name: 'Elegir Plataforma', status: true },
        { id: 2, name: 'Elegir Cursos', status: false },
        { id: 3, name: 'Elegir Dominios', status:  false },
        { id: 4, name: 'Elegir Hardware', status: true }
    ];

    // Eliminar un proyecto
    const onClickDelete = () => {
        deleteProject(actualProject.id);
    }

    return (
        <Fragment>
            <h2>Proyecto: { actualProject.name }</h2>
            <ul className="taskList">
                {tasks.length === 0
                    ? (<li className="tasks"><p>No hay tareas</p></li>)
                    : tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-danger"
                onClick={onClickDelete}
            >Eliminar proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListTasks;