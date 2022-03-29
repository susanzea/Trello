import React from 'react';



class createWorkspaceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user_id: this.props.userId
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
        // close modal
    }


    render() {
        return(
            <div className="create-workspace-form">
                <form onSubmit={this.handleSubmit} className='create-workspace-form'>
                    <input type="text" id="workspace-input" 
                        onChange={this.handleChange} 
                        value={this.state.title} 
                        placeholder='Enter a title...'
                    />
                    <button id="create-workspace-and-hide-form" >＋</button>
                </form>
                <button id="show-create-workspace-form" className='add' onClick={this.toggle}>＋</button>
            </div>
        )
    }



}