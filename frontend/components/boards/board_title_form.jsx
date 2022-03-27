import React from 'react';

class BoardTitleForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.board.id,
            title: props.board.title,
            workspaceId: props.board.workspace_id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleSubmit() {
        this.props.editBoard(this.state);
    }


    render() {
        debugger
        return(
            <form className='board-title-form'>
                <input type="text"
                className='board-title-input'
                value={this.state.title}
                onChange={this.handleChange}
                onBlur={this.handleSubmit}
                />
            </form>
        )
    }
}

export default BoardTitleForm