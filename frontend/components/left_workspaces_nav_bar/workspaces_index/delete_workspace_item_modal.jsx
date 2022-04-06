import React, { useEffect } from 'react';

function DeleteWorkspaceItemModal(props) {

    return (
        <div className='delete-workspace-modal'>
            <div className='delete-modal-container'>
                <button className='close-delete-workspace-modal' 
                    onClick={() => props.openDeleteModal(false)}
                >✕</button>
                
                <h2>Delete board?</h2>
                <hr />
                <h3>Are you sure you want to delete {props.workspaceTitle}?</h3>
                <h1>Things to know:</h1>
                <ul>
                    <li>This is permanent and can't be undone.</li>
                    <li>All boards in this Workspace will be deleted.</li>
                </ul>
                <p>All lists and cards will be deleted, there is no undo.</p>
                <h1>Enter the Workspace name to delete</h1>
                <input type="text" />
                <button onClick={props.destroyWorkspace}>Delete Workspace</button>
            </div>
        </div>
    )
}

export default DeleteWorkspaceItemModal;