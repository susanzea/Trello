import React from 'react';

class DeleteWorkspaceItemModal extends React.Component {

    constructor(props) {
        super(props);
        debugger

        this.state = {
            input_workspace_title: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ input_workspace_title: e.target.value })
    }  
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/home`)
        this.props.destroyWorkspace(this.props.workspace.id);
    }


    render() {
        return (
            <div id='delete-workspace-modal-background'>
                <div id='delete-workspace-modal'>
                    <button className='close-delete-workspace-modal' 
                        onClick={() => this.props.openDeleteModal(false)}
                    >✕</button>
                    
                    <h2>Delete workspace?</h2>
                    <div id='main-content'>
                        <h3>Are you sure you want to delete {this.props.workspace.title}?</h3>
                        <h1>Things to know:</h1>
                        <ul>
                            <li><span>This is permanent and can't be undone.</span></li>
                            <li>
                                <span>All boards in this Workspace will be
                                permanently deleted.</span>
                            </li>
                        </ul>
                        
                        <h1>Enter the Workspace name to delete</h1>
                        
                        <form id='delete-workspace-form'
                            onSubmit={this.handleSubmit}
                        >
                            <input type="text" 
                                value={this.state.input_workspace_title}
                                onChange={this.handleChange}
                                placeholder={this.props.workspace.title}
                            />
                            <button 
                                id={this.props.workspace.title === 
                                    this.state.input_workspace_title ? 
                                    'title-match' : 'no-title-match'}  
                                type={this.props.workspace.title === 
                                    this.state.input_workspace_title ? 
                                    'submit' : 'button'} 
                            >Delete Workspace</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteWorkspaceItemModal;

//  <button onClick={props.destroyWorkspace}>Delete Workspace</button>
