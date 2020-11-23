import React from 'react';

const Task = ({task}) => {
    return ( 
        <li className="alert alert-light taskShadow" role="alert">
            <p>{task.name}</p>

            <div className="actions float-right ml-3">
                <button
                    type="button"
                    className="btn btn-primary btn-sm mr-2"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                >
                    Eliminar
                </button>
            </div>

            <div className="float-right">
                {task.status
                ?
                    (
                        <span
                            type="button"
                            className="badge badge-success"
                        >Completo</span>
                    )
                :
                    (
                        <span
                            type="button"
                            className="badge badge-warning"
                        >Incompleto</span>
                    )
                }
            </div>
            
        </li>

     );
}
 
export default Task;