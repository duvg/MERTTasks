import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
 } from '../../types';

 import axiosClient from '../../config/axios';


const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Tienda virtual' },
        { id: 2, name: 'Desarrollo de Base de datos' },
        { id: 3, name: 'Diseño de sitio web' }
    ];


    const initialState = {
        // Proyectos
        projects : [],
        form : false,
        errorform: false,
        project: null
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
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
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
            console.log(error);
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
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }


    return (
        <projectContext.Provider
            value={{
                // State
                projects: state.projects,
                form: state.form,
                errorform: state.errorform,
                project: state.project,
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