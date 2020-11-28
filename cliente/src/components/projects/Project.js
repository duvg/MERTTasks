import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import tasksContext from '../../context/tasks/taskContext'

const Project = ({ project }) => {
    
    // Obtener el state 
    const projectsContest = useContext(projectContext);
    const { currentProject } = projectsContest;

    // Obtener la función del context de tarea
    const taskContext = useContext(tasksContext);
    const { getTasks } = taskContext;

    // Funcion para agregar el proyecto actual
    const selectProject = id => {
        
        currentProject(id); // Establecer el proyecto actual
        getTasks(id); // Filtrar la teareas para el proyecto seleccionado
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-default my-1"
                onClick={() => selectProject(project.id)}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;