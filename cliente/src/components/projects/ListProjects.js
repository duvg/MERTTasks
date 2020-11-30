import React, { useContext, useEffect, useRef } from 'react';

import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {

    // Extraer los proyectos del state inicial
    const projectContext = useContext(ProjectContext);
    const { projects, getProjects } = projectContext;

    const nodeRef = useRef(null);

    // Obtener proyectos al cargar el componente
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])

    // Comprobar si proyectos tiene contenido
    if ( projects.length === 0) return <p className="m-3 text-dark">No hay proyectos, comienza creando uno!</p>;


    return (
        <ul className="listProjects">
            <TransitionGroup>
                    
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="project"
                        nodeRef={nodeRef}
                    >
                        <Project
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
          
        </ul>
    );
}
 
export default ListProjects;
