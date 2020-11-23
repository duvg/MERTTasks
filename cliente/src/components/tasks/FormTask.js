import React from 'react';

const FormTask = () => {
    return ( 
        <div className="container">

        
        <div className="row justify-content-center contentFormTasks py-4">
            <div className="col-md-6">
                <div className="formTask">
                    <h2>Agregar una Tarea</h2>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Nombre de la tarea"
                                name="name"
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btn btn-primary btn-block"
                                value="Agregar Tarea"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default FormTask;