import React from "react";

class CardTitleForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.card.title
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        return null;
    }

    handleSubmit() {
        return null;
    }


    render() {
        return (
            <form className='card-title-form' onSubmit={this.handleSubmit} action="">
                <input type="text"
                className='card-title-input'
                value={this.state.title}
                onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default CardTitleForm;