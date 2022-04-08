import React, {useState} from 'react';
import { render } from 'react-dom';

class CreateBoardModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            workspace_id: props.workspace.id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state);
        this.props.openCreateBoardModal(false);
    }


    render() {
        const titleRequiredNotification = () => {
            if (this.state.title === '') {
                return <p>👋 Board title is required</p>
            } 
        }

        return (
            <div id='create-board-model-background'>
                <div id='create-board-modal'>
                    <button id='close-create-board-modal' 
                        onClick={() => this.props.openCreateBoardModal(false)}
                    >✕</button>
                    <div id="create-board-header">
                        <h1>Create board</h1>
                        <h2>in {this.props.workspace.title}</h2>
                    </div>
                    <img src={window.create_board_image} 
                        alt="workspace placeholder since no board index rendering" 
                    />
                    <h3>Board title <span className='required'>*</span></h3>
                    <form className='create-board-form'
                        onSubmit={this.handleSubmit}
                    >
                        <input type="text"
                            id={this.state.title === '' ? 'required-empty' : 'required-present'} 
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                        {titleRequiredNotification()}
                        
                        <button
                            id={this.state.title === 
                                    '' ? 
                                    'no-board-title-present' : 'board-title-present'}  
                            type={this.state.title === 
                                '' ? 
                                'button' : 'submit'}
                        >Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateBoardModal;

// id="create-board-form-input"