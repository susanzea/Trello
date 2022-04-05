import React, {useState} from 'react';
import CreateWorkspaceForm from './create_workspace_form_container';

function CreateWorkspaceModal(props) {

    return (
        <div className='create-workspace-modal-background'>
            <div className='create-workspace-modal'>
                <button className='close-create-workspace-modal' 
                    onClick={() => props.openCreateWorkspaceModal(false)}
                >✕</button>
                <img src={window.workspace_modal_img} alt="image of a trelloh board" className='workspace-modal-img' />
                <div id='main-content'>
                    <h1>Let's create a Workspace</h1>
                    <h2>Boost your productivity by making it easier for everyone to access tasks in one location.</h2>
                    <CreateWorkspaceForm 
                        openCreateWorkspaceModal={props.openCreateWorkspaceModal}
                    />
                </div>
            </div>
        </div>
    )



}

export default CreateWorkspaceModal;