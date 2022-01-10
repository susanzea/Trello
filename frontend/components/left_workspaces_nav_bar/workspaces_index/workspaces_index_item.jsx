import React from 'react';

const WorkspaceIndexItem =(props) => {

    return(
        <li>
            <p className="workspaces-index-item" >{props.workspace.title}</p>
            <button onClick={() => props.destroyWorkspace(props.workspace.id)}> - </button>
        </li>
    )
}

export default WorkspaceIndexItem;
