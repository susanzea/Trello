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

    addOnClick() {
        
    }


    render() {

        const toggleInput = document.querySelector('card-form-textarea')

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='card-form'>
                    <input type="text" id='card-form-input' placeholder='Enter a title for the card...' value={this.state.title} onChange={this.handleChange} />
                    <button className="add-button" type='submit'><span className='add'>＋</span> Add a card</button>
                </div>
            </form>
        )
    }
}

export default CardForm;

<button className='form-x-button'>✕</button>