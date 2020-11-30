import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    ERROR_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
 } from '../../types';

 import axiosClient from '../../config/axios';


const ProjectState = props => {

    const initialState = {
        // Proyectos
        projects : [],
        form : false,
        errorform: false,
        project: null,
        message: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(projectReducer, initialState);

    // funciones para el CRUD de proyectos
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    // Obtener losproyectos
    const getProjects = async () => {
        try {
            const result = await axiosClient.get('/api/projects');

            dispatch({
                type: GET_PROJECTS,
                payload: result.data
            });
        } catch (error) {
            const alert = {
                msg: 'Ocurrio un error',
                category: 'danger'
            }

            dispatch({
                type: ERROR_PROJECT,
                payload: alert
            });
        }
    }

    // Add new project
    const addProject = async project => {
        try {
            const result = await axiosClient.post('/api/projects', project);

            // Guardar proyecto en el state
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            });
        } catch (error) {
            const alert = {
                msg: 'Ocurrio un error',
                category: 'danger'
            }

            dispatch({
                type: ERROR_PROJECT,
                payload: alert
            });
        }
    }

    // Error de validacion del form
    const showErrorForm = () => {
        
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // Seleccionar el proyecto que el usuario le dio click
    const currentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    // Eliminar proyecto
    const deleteProject = async projectId => {

        try {
            await axiosClient.delete(`/api/projects/1`);

            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });
        } catch (error) {
            const alert = {
                msg: 'Ocurrio un error',
                category: 'danger'
            }

            dispatch({
                type: ERROR_PROJECT,
                payload: alert
            });
        }
        
    }


    return (
        <projectContext.Provider
            value={{
                // State
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
                message: state.message,
                // Funciones
                showForm,
                getProjects,
                addProject,
                showErrorForm,
                currentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState