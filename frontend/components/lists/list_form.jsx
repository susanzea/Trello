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
        this.toggle = this.toggle.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createList(this.state);
        this.setState({ title: '' })
    }

    toggle(e) {
        // if (e.target.className === 'reveal-workspace-board') {

        // } else if () {

        // }
    }

    render() {
        debugger
        return (
            <div className='list-form'>
                <button
                    className="reveal-workspace-board add-button"
                    type='submit'
                >
                    <span className='add'>＋</span>
                    {this.props.totalBoardLists === 0 ? "Add a list" : "Add another list"}
                </button>
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
            </div>
        )
    }
}

export default ListForm;


/* <form onSubmit={this.handleSubmit}>
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
</form> */