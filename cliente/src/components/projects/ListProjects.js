import React, { useContext, useEffect, useRef } from 'react';

import Project from './Project';
import ProjectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from '../../context/alerts/alertContext';

const ListProjects = () => {

    // Extraer los proyectos del state inicial
    const projectContext = useContext(ProjectContext);
    const { message, projects, getProjects } = projectContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const nodeRef = useRef(null);

    // Obtener proyectos al cargar el componente
    useEffect(() => {
        getProjects();

        // Si hay un error
        if (message) {
            showAlert(message.msg, message.category);
        }
        // eslint-disable-next-line
    }, [message])

    // Comprobar si proyectos tiene contenido
    if ( projects.length === 0) return <p className="m-3 text-dark">No hay proyectos, comienza creando uno!</p>;


    return (
        <ul className="listProjects">
            <TransitionGroup>
                { alert ? (<div className={`alert alert-${alert.category} mx-3`}>{alert.msg}</div>) : null }
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
