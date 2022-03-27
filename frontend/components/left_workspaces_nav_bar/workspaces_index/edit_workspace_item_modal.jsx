import React, { useEffect } from 'react';

function EditWorkspaceItemModal(props) {

    return (
        <div className='edit-workspace-modal-background'>
            <div className='modal-container'>
                <button className='edit-workspace-modal' 
                    onClick={() => props.openModal(false)}
                >✕</button>
                
            

            </div>
        </div>
    )
}

export default EditWorkspaceItemModal;