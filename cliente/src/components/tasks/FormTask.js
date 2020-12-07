import React, { useContext, useState, useEffect } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/taskContext';

const FormTask = () => {

    // Extraer el proyecto actual datos del state
    const projectContext = useContext(ProjectContext);
    const { project } = projectContext;

    // Extraer las funciones del state de tareas
    const taskContext = useContext(TaskContext);
    const { 
        currenttask,
        errortask,
        addTask,
        validateTask,
        getTasks,
        updateTask,
        unselectTask
    } = taskContext;

    // useEffect para detectar si hay una tarea seleccionada
    useEffect(() => {
        if (currenttask !== null) {
            setTask(currenttask);
        } else {
            setTask({
                name: ''
            })
        }
    },[currenttask]);


    // State del form
    const [task, setTask] = useState({
        name: '',
    });

    // Si no hay proyecto seleccionado
    if ( ! project ) return null;

    // Extraer el nombre de la tarea
    const { name } = task;

    // Array destructuring para extraer el proyecto seleccionado por el usuario
    const [currentProject] = project;


    // Leer los valores del form
    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        // Validar los datos
        if (name.trim() === '') {
            validateTask();
            return;
        }

        // Revisar si es edición o si es una nueva tarea
        if (currenttask === null) {
            // Agregar la nueva tarea al state de las tareas
            task.project = currentProject._id;
            addTask(task);
        } else {
            // Actualizar la tarea
            updateTask(task);

            // Elimina la tarea seleccionada del state
            unselectTask();
        }

        // Obtener y filtrar las tareas del proyecto actual
        getTasks(currentProject._id);

        // Reiniciar el form
        setTask({
            name: ''
        });
    }

    return ( 
        <div className="container">
            <div className="row justify-content-center contentFormTasks py-4">
                <div className="col-md-6">
                    <div className="formTask">
                        <h2>Agregar una Tarea</h2>
                        <form
                            onSubmit={onSubmit}
                        >
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de la tarea"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    value={currenttask ? 'Editar Tarea' : 'Agregar Tarea'}
                                />
                            </div>
                        </form>
                        {errortask ? <p className="alert alert-danger mt-2"> El nombre de la tarea es obligatorio</p> : null}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FormTask;