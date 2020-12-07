import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import axiosClient from '../../config/axios';

import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_TASK,
    CURRENT_TASK,
    UPDATE_TASK,
    UNSELECT_TASK
} from '../../types';

const TaskState = props => {
    const initialState = {
        
        tasksproject: [],
        errorTask: false,
        currenttask: null
    }

    // Crear el dispatch y el state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Funciones 


    // Obtener las tareas de un proyecto
    const getTasks = async project => {
        try {

            const result = await axiosClient.get('/api/tasks', {params: { project } });
            console.log(result);
            dispatch({
                type: TASKS_PROJECT,
                payload: result.data.tasks
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Valida y muestra un error si no pasa la validación
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        });
    }

    // Agregar una tarea al proyecto seleccionado
    const addTask = async task => {
        
        try {
            const result = await axiosClient.post('/api/tasks', task);
            console.log(result);
            dispatch({
                type: ADD_TASK,
                payload: task
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Eliminar tarea por id
    const deleteTask = async (taskId, project) => {
        try {
            const result = await  axiosClient.delete(`/api/tasks/${taskId}`, {params: { project } });
            console.log(result);
            dispatch({
                type: DELETE_TASK,
                payload: taskId
            });
        } catch (error) {
            console.log(error);
        }
    } 

    // Actualiza una tarea
    const updateTask = async task => {
        try {

            const result = await axiosClient.put(`/api/tasks/${task._id}`, task);
            console.log(result.data);
            dispatch({
                type: UPDATE_TASK, 
                payload: result.data
            });
        } catch (error) {
            console.log(error);
        }
        
    }
       
    // Extrae una tarea para edición
    const setCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
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
                tasksproject: state.tasksproject,
                errortask: state.errortask,
                currenttask: state.currenttask,
                // stete functions
                getTasks,
                addTask,
                validateTask,
                deleteTask,
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