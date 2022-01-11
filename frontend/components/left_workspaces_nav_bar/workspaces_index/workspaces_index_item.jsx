import React from 'react';
import { Link } from 'react-router-dom'
import { postWorkspace } from '../../../util/workspace_api_util';

const WorkspaceIndexItem = (props) => {

    const colorOptions = {
        0: "#cb5223",
        1: "#373697",
        2: "#b7336e",
        3: "#027ba6",
        4: "#017951"
    }

    const selected = props.selected === props.idx
    
    return(
        <Link className={`${selected ? "selected" : "notSelected"} workspaces-index-item`}
            onClick={() => props.setSelected(props.idx)}
            to={`/workspaces/${props.workspace.id}/boards`}
        >
            <div className='workspaces-index-item-header'>
                <p className='workspace-index-item-symbol' 
                    style={{ backgroundColor: colorOptions[props.idx % 5] }}
                >
                    {props.workspace.title.slice(0, 1).toUpperCase()}
                </p>
                <p className='workspace-index-item-title'>{props.workspace.title}</p>
            </div>
            <button onClick={() => props.destroyWorkspace(props.workspace.id)}> — </button>
        </Link>
    )
}

export default WorkspaceIndexItem;
