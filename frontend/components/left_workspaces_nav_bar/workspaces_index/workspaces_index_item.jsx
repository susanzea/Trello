import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom'
import DeleteWorkspaceItemModal from './delete_workspace_item_modal'
import EditWorkspaceItemModal from './edit_workspace_item_modal';

const WorkspaceIndexItem = (props) => {
    debugger
    const [dropDownMenuOpen, openDropDownMenu] = useState(false);
    const [deleteModalOpen, openDeleteModal] = useState(false);
    const [editModalOpen, openEditModal] = useState(false);

    const colorOptions = {
        0: "#cb5223",
        1: "#373697",
        2: "#b7336e",
        3: "#027ba6",
        4: "#017951"
    }

    

    // TODO: set selected based on url, default should be first workspace
    // on mount should fetch the workspace based on url and highlight that idx if the id matches
    const selected = props.selected === props.workspace.id

    // const [workspace, setWorkspace] = useState(0);


    // useEffect(() => {
    //     props.fetchUserWorkspace(props.workspace.id).then(res => {
    //         setWorkspace(Object.values(res.workspace))
    //     })
    // }, []);
    
    
    return(
        <div className='workspaces-index-container'>
            <Link className={`${selected ? "selected" : "notSelected"} workspaces-index-item`}
                onClick={() => props.setSelected(props.workspace.id)}
                to={{
                    state: {
                        workspace: props.workspace
                    },
                    pathname: `/workspaces/${props.workspace.id}/boards`
                    }
                }>
                <div className='workspaces-index-item-header'>
                    <p className='workspace-index-item-symbol' 
                        style={{ backgroundColor: colorOptions[props.idx % 5] }}
                    >
                        {props.workspace.title.slice(0, 1).toUpperCase()}
                    </p>
                    <p className='workspace-index-item-title'>
                        {props.workspace.title}
                    </p>
                </div>
            
                { !dropDownMenuOpen &&
                    <button onClick={() => openDropDownMenu(true) }>
                    <img className='drop-down-icon' 
                        src={window.drop_down_arrow} 
                        alt="drop down menu icon" 
                    />
                    </button>
                }

                { dropDownMenuOpen &&
                    <button onClick={() => openDropDownMenu(false) }>
                    <img className='drop-down-icon open-drop-down' 
                        src={window.drop_down_arrow} 
                        alt="drop down menu icon" 
                    />
                    </button>
                }
            </Link>

            { dropDownMenuOpen &&
                <div className='workspace-index-item-drop-down'>
                    <button onClick={() => openEditModal(true) }><span>✎</span>edit</button>
                    <button onClick={() => openDeleteModal(true) }><span>—</span>delete</button>
                </div>
            }

            { deleteModalOpen && <DeleteWorkspaceItemModal  
                destroyWorkspace={() => props.destroyWorkspace(props.workspace.id)}
                openDeleteModal={openDeleteModal}
                workspace={props.workspace}
            />}

            { editModalOpen && <EditWorkspaceItemModal workspace={props.workspace}
                workspace={props.workspace}
                editWorkspace={props.editWorkspace}
                openEditModal={openEditModal}
            />}
        </div>
    )
}

export default withRouter(WorkspaceIndexItem);
