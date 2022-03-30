import React from 'react';

class CreateWorkspaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user_id: props.currentUserId
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createWorkspace(this.state);
        this.props.openCreateWorkspaceModal(false);
    }


    render() {
        return (
            <form className='create-workspace-form'
                onSubmit={this.handleSubmit}    
            >
                <input type="text" id="workspace-input" 
                    onChange={this.handleChange} 
                    value={this.state.title} 
                    placeholder='Enter a title...'
                />
                <button type='submit'>Create</button>
            </form>
        )
    }
}

export default CreateWorkspaceForm;