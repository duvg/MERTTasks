import React, { useContext } from 'react';

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

    // Obtener el context y extraer el proyecto
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;
    const [currentProject] = project;

    // Obtener el context y extraer la función
    const tasksContext = useContext(taskContext);
    const { getTasks, deleteTask, updateTask, setCurrentTask } = tasksContext;



    // Eliminar la tarea cuando el usario hace click en el boton eliminar
    const handleTaskDelete = taskId => {
        deleteTask(taskId, currentProject._id);
        getTasks(currentProject._id);
    }

    // Modificar el estado de la tarea
    const handleChangeStatus = task => {
        if (task.status) {
            task.status = false;
        } else {
            task.status = true;
        }
        updateTask(task);
    }

    // Obtener la tarea actual que el usuario desea editarr
    const handleSetCurrentTask = task => {
        setCurrentTask(task);
    }

    return ( 
        <li className="alert alert-light taskShadow" role="alert">
            <p>{task.name}</p>

            <div className="actions float-right ml-3">
                <button
                    type="button"
                    className="btn btn-primary btn-sm mr-2"
                    onClick={() => handleSetCurrentTask(task)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleTaskDelete(task._id)}
                >
                    Eliminar
                </button>
            </div>

            <div className="float-right">
                {task.status
                ?
                    (
                        <span
                            type="button"
                            className="badge badge-success"
                            onClick={() => handleChangeStatus(task)}
                        >Completo</span>
                    )
                :
                    (
                        <span
                            type="button"
                            className="badge badge-warning"
                            onClick={() => handleChangeStatus(task)}
                        >Incompleto</span>
                    )
                }
            </div>
            
        </li>

     );
}
 
export default Task;