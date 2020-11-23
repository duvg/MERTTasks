import React, { useContext, useEffect } from 'react';

import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {

    // Extraer los proyectos del state inicial
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    // Obtener proyectos al cargar el componente
    useEffect(() => {
        getProjects()
    }, [])

    // Comprobar si proyectos tiene contenido
    if ( projects.length === 0) return null;

    

    return (
        <ul className="listProjects">
            {projects.map(project => (
                <Project
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    );
}
 
export default ListProjects;
