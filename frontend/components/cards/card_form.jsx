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
        this.toggle = this.toggle.bind(this);
        this.addCardHideForm = this.addCardHideForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }
    
    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createCard(this.state);
        this.setState({ title: '' })
    }

    toggle(e) {
        if (e.target.className === "reveal-card-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.className === "add-card") {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        } else if (e.target.className === "hide-card-form") {
            this.setState({ title: '' })
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        }
    }

    addCardHideForm() {
        return null;
    }

    hideForm() {
        return null;
    }


    render() {

        const toggleInput = document.querySelector('card-form-textarea')

        return (
            <div className='card-index-foot'>
                <button className="reveal-card-form" onClick={this.toggle} type='submit'>
                    <span className='add'>＋</span> Add a card
                </button>


 
                <form className='card-form' style={{display: "none"}} onSubmit={this.handleSubmit}>
                        <input type="text"
                            id='card-form-input'
                            placeholder='Enter a title for the card...'
                            value={this.state.title}
                            onChange={this.handleChange}
                        />

                        <button className="add-card" 
                            type='submit'
                        >
                            Add card
                        </button>

                        <button className='hide-card-form' onClick={this.toggle} type="button" >✕</button>
                </form>
            </div>
        )
    }
}

export default CardForm;

/* <button className='form-x-button'>✕</button>


<form onSubmit={this.handleSubmit}>
                <div className='card-form'>
                    <input type="text" id='card-form-input' placeholder='Enter a title for the card...' value={this.state.title} onChange={this.handleChange} />
                    <button className="add-button" type='submit'><span className='add'>＋</span> Add a card</button>
                </div>
            </form> */
// ^^^ original return