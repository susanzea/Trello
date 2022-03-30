import React, {useState} from 'react';
import WorkspacesIndexContainer from './workspaces_index/workspaces_index_container'
import CreateWorkspaceModal from './create_workspace/create_workspace_modal';

function LeftWorkspacesNavBar(props) {
    const [createWorkspaceModalOpen, openCreateWorkspaceModal] = useState(false);

    return(
        <nav className='left-workspaces-nav-bar'>
            <header id='workspaces-index-header'>
                <div className="workspaces-index-header-title">
                    <h3 id="workspaces-index-title">Workspaces</h3>
                   
                    <button id="show-create-workspace-form" 
                        className='add' 
                        onClick={() => openCreateWorkspaceModal(true)}
                    >＋</button>
                </div>
            </header>
            {createWorkspaceModalOpen && <CreateWorkspaceModal 
                    openCreateWorkspaceModal={openCreateWorkspaceModal} 
                />
            }
            <WorkspacesIndexContainer />
        </nav>
    )
}

export default LeftWorkspacesNavBar;