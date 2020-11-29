import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext'

const Project = ({ project }) => {
    
    // Obtener el state 
    const projectContest = useContext(ProjectContext);
    const { currentProject } = projectContest;

    // Obtener la función del context de tarea
    const taskContext = useContext(TaskContext);
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