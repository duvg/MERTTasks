import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {
    
    // Obtener el state 
    const projectsContest = useContext(projectContext);
    const { actualProject } = projectsContest;

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-default my-1"
                onClick={() => actualProject(project.id)}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;