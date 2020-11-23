import React, { Fragment } from 'react';
import Task from './Task';

const ListTasks = () => {

    const tasks = [
        { id: 1, name: 'Elegir Plataforma', status: true },
        { id: 2, name: 'Elegir Cursos', status: false },
        { id: 3, name: 'Elegir Dominios', status:  false },
        { id: 4, name: 'Elegir Hardware', status: true }
    ];

    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="taskList">
                {tasks.length === 0
                    ? (<li className="tasks"><p>No hay tareas</p></li>)
                    : tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                        />
                    ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-danger"
            >Eliminar proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListTasks;