import React, { Fragment, useContext, useRef } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Task from './Task';

import projectContext from '../../context/projects/projectContext';
import tasksContext from '../../context/tasks/taskContext';

const ListTasks = () => {

    // Extraer del state el proyecto actual
    const projectsContext = useContext(projectContext);
    const { project, deleteProject} = projectsContext;

    // Obtener las tareas del proyecto
    const taskContext = useContext(tasksContext);
    const { tasksproject } = taskContext;

    const nodeRef = useRef(null);

    // Si no hay un proyecto seleccinado 
    if ( ! project ) return  <h2>Selecciona un proyecto</h2>;

    // Array destructiring para extraer el proyecto
    const [actualProject] = project;

    // Eliminar un proyecto
    const onClickDelete = () => {
        deleteProject(actualProject._id);
    }
    

    return (
        <Fragment>
            <h2>Proyecto: { actualProject.name }</h2>
            <ul className="taskList">
                {tasksproject.length === 0
                    ? (<li className="tasks"><p className="alert alert-light">No hay tareas</p></li>)
                    : 
                    <TransitionGroup>
                    {
                        tasksproject.map(task => (
                            <CSSTransition
                                key={task.id}
                                timeout={200}
                                classNames="task"
                                nodeRef={nodeRef}
                            >
                                <Task    
                                    task={task}
                                />
                            </CSSTransition>
                        ))
                    }    
                    </TransitionGroup>
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