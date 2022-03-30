import React from 'react';

class CreateWorkspaceForm extends React.Component {
    constructor(props) {
        debugger

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

    handleSubmit() {
        // e.preventDefault();
        this.props.createWorkspace(this.state);
        this.props.openCreateWorkspaceModal(false);
    }


    render() {
        debugger
        return (
            <form onSubmit={this.handleSubmit}    className='create-workspace-form'>
                <input type="text" id="workspace-input" 
                    onChange={this.handleChange} 
                    value={this.state.title} 
                    placeholder='Enter a title...'
                />
                <button type='submit'
                    onClick={() => this.props.openCreateWorkspaceModal(this.state)}
                >Create</button>
            </form>
        )
    }
}

export default CreateWorkspaceForm;