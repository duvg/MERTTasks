import React, { useContext, useEffect } from 'react';

import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {

    // Extraer los proyectos del state inicial
    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    // Obtener proyectos al cargar el componente
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])

    // Comprobar si proyectos tiene contenido
    if ( projects.length === 0) return <p className="m-3 text-dark">No hay proyectos, comienza creando uno!</p>;


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
