import React, {useState} from 'react';
import CreateWorkspaceForm from './create_workspace_form_container';

function CreateWorkspaceModal(props) {

    return (
        <div className='create-workspace-modal-background'>
            <div className='create-workspace-modal'>
                <button className='close-create-workspace-modal' 
                    onClick={() => props.openCreateWorkspaceModal(false)}
                >✕</button>
                <CreateWorkspaceForm 
                    openCreateWorkspaceModal={props.openCreateWorkspaceModal}
                />
                {/* <img src={window.workspace_modal_img} alt="image of a trelloh board" className='workspace-modal-img' /> */}
            </div>
        </div>
    )



}

export default CreateWorkspaceModal;