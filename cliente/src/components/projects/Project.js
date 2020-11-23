import React from 'react';

const Project = ({ project }) => {
    console.log(project);
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-default my-1"
            >{project.name}</button>
        </li>
     );
}
 
export default Project;