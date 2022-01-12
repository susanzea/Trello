import React from 'react';

class ListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='list-form'>
                    <input type="text" value={this.state.title} onChange={this.handleChange} placeholder='Enter list title' />
                    <button type='submit'>+ Add a list</button>
                </div>
            </form>
        )
    }
}

export default ListForm;