import React from 'react';

const WorkspaceIndexItem =(props) => {

    return(
        <li className="workspaces-index-item">
            <p className=''>{props.workspace.title.slice(0,1)}</p>
            <p>{props.workspace.title}</p>
            <button onClick={() => props.destroyWorkspace(props.workspace.id)}> — </button>
        </li>
    )
}

export default WorkspaceIndexItem;
