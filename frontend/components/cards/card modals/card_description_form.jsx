import React from "react";

class CardDescriptionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.card.id,
            title: props.card.title,
            description: props.card.description,
            user_id: props.card.user_id,
            list_id: props.card.list_id,
            due_date: props.card.due_date
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
    }  
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.editCard(this.state);
    }

    toggle(e) {
        if (e.target.className === "reveal-card-description-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.className === "save-description") {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        } else if (e.target.className === "hide-card-description-form") {
            this.setState({ description: this.props.card.description })
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        }
    }

    render() {
        return (
            <div className="card-description">
                <button className="reveal-card-description-form" 
                    onClick={this.toggle} 
                    type='submit'>
                    {this.state.description === '' ? "Add a more detailed description..." : this.props.card.description}    
                </button>

                <form className='card-description-form' 
                    onSubmit={this.handleSubmit}
                    style={{display: "none"}}
                >
                        <input type="text"
                            id='card-description-form-input'
                            placeholder="Add a more detailed description..."
                            value={this.state.description}
                            onChange={this.handleChange}
                        />


                             <button className="save-description" 
                                onClick={this.toggle}
                                type='submit'
                            >
                                Save
                            </button>

                            <button className='hide-card-description-form' 
                                onClick={this.toggle} 
                                type="button"
                            >
                                ✕
                            </button>
                </form>
            </div>
        )
    }
}

export default CardDescriptionForm;