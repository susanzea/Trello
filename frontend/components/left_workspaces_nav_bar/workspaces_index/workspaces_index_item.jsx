import React from 'react';

const WorkspaceIndexItem =(props) => {



    return(
        <li className="workspaces-index-item" >{props.workspace.title}</li>
    )
}

export default WorkspaceIndexItem;