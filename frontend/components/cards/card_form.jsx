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
                    <textarea value={this.state.title} onChange={this.handleChange} placeholder="Enter a title for the card..."></textarea>
                    <button className="add-button" type='submit'><span className='add'>＋</span> Add a card</button>
                    <button className='form-x-button'>✕</button>
                </div>
            </form>
        )
    }
}

export default CardForm;