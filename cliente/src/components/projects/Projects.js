import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Navbar from '../layouts/Navbar';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';

const Projects = () => {
    return ( 
       
        <div className="wrapper">
            <Sidebar />

        
            <div id="content">

                <Navbar />
                <main>
                    <FormTask />
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