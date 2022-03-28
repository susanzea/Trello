import React, { useEffect } from 'react';

function DeleteWorkspaceItemModal(props) {

    return (
        <div className='edit-workspace-modal-background'>
            <div className='delete-modal-container'>
                <button className='edit-workspace-modal' 
                    onClick={() => props.openDeleteModal(false)}
                >✕</button>
                
                <h2>Delete board?</h2>
                <hr />
                <p>All lists and cards will be deleted, there is no undo.</p>
                <button onClick={props.destroyWorkspace}>Delete</button>
            </div>
        </div>
    )
}

export default DeleteWorkspaceItemModal;