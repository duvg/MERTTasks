import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

import {v4 as uuidv4 } from 'uuid';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    STATUS_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    UNSELECT_TASK
} from '../../types';

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, projectId: 1,name: 'Elegir Plataforma', status: true },
            { id: 2, projectId: 2,name: 'Elegir Cursos', status: false },
            { id: 3, projectId: 3,name: 'Elegir Dominios', status:  false },
            { id: 4, projectId: 4,ame: 'Elegir Hardware', status: true },
            { id: 5, projectId: 3,name: 'Elegir Plataforma', status: true },
            { id: 6, projectId: 2,name: 'Elegir Cursos', status: false },
            { id: 7, projectId: 3,name: 'Elegir Dominios', status:  false },
            { id: 8, projectId: 4,name: 'Elegir Plataforma', status: true },
            { id: 9, projectId: 1,name: 'Elegir Cursos', status: false },
            { id: 10, projectId: 1,name: 'Elegir Dominios', status:  false },
        ],
        tasksproject: null,
        errorTask: false,
        currenttask: null
    }

    // Crear el dispatch y el state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Funciones 


    // Obtener las tareas de un proyecto
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        });
    }

    // Valida y muestra un error si no pasa la validación
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const addTask = task => {
        task.id = uuidv4.v4(); // Asignamos el id a la tarea
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Eliminar tarea por id
    const deleteTask = taskId => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        });
    } 

    // Cambiar el estado de una tarea
    const changeTaskStatus = task => {
        dispatch({
            type: STATUS_TASK,
            payload: task
        })
    }
       
    // Extrae una tarea para edición
    const setCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        });
    }

    // Actualiza una tarea
    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK, 
            payload: task
        });
    }

    // Elimina la tarea seleccionada
    const unselectTask = () => {
        dispatch({
            type: UNSELECT_TASK
        });
    }

    return (
        <TaskContext.Provider
            value={{ 
                // state values
                tasks: state.tasks,
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                currenttask: state.currenttask,
                // stete functions
                getTasks,
                addTask,
                validateTask,
                deleteTask,
                changeTaskStatus,
                setCurrentTask,
                updateTask,
                unselectTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;