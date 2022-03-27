import React, { useEffect, useState } from 'react';

class EditWorkspaceItemModal extends React.Component {
    constructor(props) {
        debugger
        super(props);

        this.state = {
            id: props.workspace.id,
            title: props.workspace.title,
            user_id: props.workspace.user_id
        }
    }
    

    render() {
        return (
            <div className='edit-workspace-modal-background'>
                <div className='edit-modal-container'>
                    <button className='edit-workspace-modal' 
                        onClick={() => props.openModal(false)}
                    >✕</button>

                    <form>

                    </form>
                    
                </div>
            </div>
        )
    }
}

export default EditWorkspaceItemModal;