import React, { useEffect, useState } from 'react';

class EditWorkspaceItemModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.workspace.id,
            title: props.workspace.title,
            user_id: props.workspace.user_id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({ title: e.target.value })
    }  
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.editWorkspace(this.state);
        this.props.openEditModal(false);
    }

    render() {
        return (
            <div className='edit-workspace-modal-background'>
                <div className='edit-workspace-modal'>
                    <button id='close-edit-workspace-modal'
                        onClick={() => this.props.openEditModal(false)}
                    >✕</button>
                    <img src={window.workspace_modal_img} alt="image of a trelloh board" className='workspace-modal-img' />
                    <div id='main-content'>
                        <h1>Edit your Workspace</h1>
                        <h3>Name</h3>
                        <form className='edit-workspace-form'
                            onSubmit={this.handleSubmit}
                        >
                            <input type="text"
                                id='workspace-index-item-edit-input'
                                placeholder="Hey, you need a title!"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />

                            <button id={this.state.title ? 'title-present' : 'no-title'}  type={this.state.title ? 'submit' : 'button'} >Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditWorkspaceItemModal;