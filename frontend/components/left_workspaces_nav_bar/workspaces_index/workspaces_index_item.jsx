import React from 'react';
import { Link } from 'react-router-dom'
import { postWorkspace } from '../../../util/workspace_api_util';

const WorkspaceIndexItem = (props) => {
    const [cardModalOpen, openModal] = useState(false)

    const colorOptions = {
        0: "#cb5223",
        1: "#373697",
        2: "#b7336e",
        3: "#027ba6",
        4: "#017951"
    }

    const selected = props.selected === props.idx
    
    return(
        <div>
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

                <button>
                    <img className='drop-down-icon' src={window.drop_down_arrow} alt="drop down menu icon" />
                </button>

                <div className='workspace-index-item-drop-down'>
                    <button onClick={() => props.destroyWorkspace(props.workspace.id)}>edit</button>
                    <button onClick={() => props.destroyWorkspace(props.workspace.id)}>delete</button>
                </div>
            </Link>



            { deleteModalOpen && <DeleteWorkspaceItemModal workspace={props.workspace}
                list={props.list}
                editCard={props.editCard}
                openModal={openModal}
            />}

            { editModalOpen && <EditWorkspaceItemModal workspace={props.workspace}
                list={props.list}
                editCard={props.editCard}
                openModal={openModal}
            />}
        </div>
    )
}

export default WorkspaceIndexItem;
