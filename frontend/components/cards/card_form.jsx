import React from 'react';


class CardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            list_id: this.props.list.id,
            user_id: this.props.currentUserId
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCard(this.state);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='card-form'>
                    <input type="text" value={this.state.title} onChange={this.handleChange} placeholder='Enter card title' />
                    <button type='submit'>+ Add a new card</button>
                </div>
            </form>
        )
    }
}

export default CardForm;