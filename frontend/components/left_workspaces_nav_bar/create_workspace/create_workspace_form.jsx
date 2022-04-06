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
                <h3>Workspace name</h3>
                <input type="text" id="workspace-input" 
                    onChange={this.handleChange} 
                    value={this.state.title} 
                    placeholder='Recruitment Team'
                />
                <p>This is the name of your company, team or organization.</p>
                <button id={this.state.title ? 'title-present' : 'no-title'}  type={this.state.title ? 'submit' : 'button'} >Create</button>
            </form>
        )
    }
}

export default CreateWorkspaceForm;