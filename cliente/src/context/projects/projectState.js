import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORM_PROJECT,
    GET_PROJECTS
 } from '../../types';


const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Tienda virtual' },
        { id: 2, name: 'Desarrollo de Base de datos' },
        { id: 3, name: 'Diseño de sitio web' }
    ];


    const initialState = {
        // Proyectos
        projects : [],
        form : false
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

    return (
        <projectContext.Provider
            value={{
                // State
                projects: state.projects,
                form: state.form,
                // Funciones
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState