import React from 'react';

class ListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            board_id: this.props.boardId
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createList(this.state);
        this.setState({ title: '' })
    }

    render() {
        debugger
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='list-form'>
                    <input type="text" value={this.state.title} onChange={this.handleChange} placeholder='Enter list title' />
                    <button 
                        className="add-button" 
                        type='submit'
                    >
                        <span className='add'>＋</span>
                        {this.props.totalBoardLists === 0 ? "Add a list" : "Add another list"}
                    </button>
                </div>
            </form>
        )
    }
}

export default ListForm;