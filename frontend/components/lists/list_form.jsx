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
        if (e.target.className === 'reveal-list-form add-button') {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.className === 'hide-list-form') {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        } else if (e.target.className === 'add-list') {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        }
    }

    render() {
        return (
            <div className='list-form'>
                <button
                    className="reveal-list-form add-button"
                    type='submit'
                    onClick={this.toggle}
                >
                    <span className='add'>＋</span>
                    {this.props.totalBoardLists === 0 ? "Add a list" : "Add another list"}
                </button>
                <form onSubmit={this.handleSubmit} className='create-list-form'>
                        <input type="text" id="create-list-input" 
                            value={this.state.title} onChange={this.handleChange} 
                            placeholder='Enter list title...' />
                        <button className="add-list" 
                            type='submit'
                        >
                            Add list
                        </button>
                        <button className='hide-list-form' onClick={this.toggle} type="button" >✕</button>
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