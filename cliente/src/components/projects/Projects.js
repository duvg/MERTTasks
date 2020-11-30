import React, { useContext, useEffect } from 'react';
import Sidebar from '../layouts/Sidebar';
import Navbar from '../layouts/Navbar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';
import AuthContext from '../../context/authentication/authContext';

const Projects = () => {


    // Extraer la informacion de autenticación
    const authContext = useContext(AuthContext);
    const { userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
    }, []);

    return ( 
       
        <div className="wrapper">
            <Sidebar />

        
            <div id="content">

                <Navbar />
                <main>
                    <FormTask />
                    <hr />
                    <div className="row justify-content-center">
                        <div className="content-tasks col-md-6">
                            <ListTasks />
                        </div>
                    </div>
                    
                </main>
                
            </div>
        </div>
     );
}
 
export default Projects;