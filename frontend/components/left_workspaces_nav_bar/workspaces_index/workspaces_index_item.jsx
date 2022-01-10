import React from 'react';

const WorkspaceIndexItem =(props) => {

    const colorOptions = {
        0: "#cb5223",
        1: "#373697",
        2: "#b7336e",
        3: "#027ba6",
        4: "#017951"

    }
    
    return(
        <li className="workspaces-index-item">
            <div className='workspaces-index-item-header'>
                <p className='workspace-index-item-symbol' style={{ backgroundColor: colorOptions[props.colorNum % 5] }}>{props.workspace.title.slice(0, 1).toUpperCase()}</p>
                <p className='workspace-index-item-title'>{props.workspace.title}</p>
            </div>
            <button onClick={() => props.destroyWorkspace(props.workspace.id)}> — </button>
        </li>
    )
}

export default WorkspaceIndexItem;
