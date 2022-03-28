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
    }

    render() {
        return (
            <div className='edit-workspace-modal-background'>
                <div className='edit-modal-container'>
                    <button className='edit-workspace-modal' 
                        onClick={() => this.props.openEditModal(false)}
                    >✕</button>

                    <form className='workspace-index-item-edit-form'
                        onClick={this.handleSubmit}
                    >
                        <input type="text"
                            id='workspace-index-item-edit-input'
                            placeholder="Hey, you haven't typed anything yet!"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />

                        <button className="save-workspace-title" 
                            type='submit'
                        >
                            Save
                        </button>
                    </form>
                    
                </div>
            </div>
        )
    }
}

export default EditWorkspaceItemModal;