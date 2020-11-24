import React, { Component } from 'react';

import NewProject from '../projects/NewProject';
import ListProjects from '../projects/ListProjects';

const Sidebar = () => {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3 className="mainTitle text-center">MERN<span>Tasks</span></h3>
            </div>
            <NewProject />
            <div className="text-center mt-5">
                <h3>Tus proyectos</h3>
            </div>
            
            <ListProjects />
            
        </nav>
    );
}
 
export default Sidebar;
