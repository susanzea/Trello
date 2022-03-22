import React from "react";


class CardTitleForm extends React.Component {
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
    }

    handleChange(e) {
        this.setState({ title: e.target.value });

        // TODO: figure out how to implement edit func. State is currently updating properly.
    }

    handleSubmit() {
        this.props.editCard(this.state);
    }


    render() {
        return (
            <form className='card-title-form'>
                <input type="text"
                className='card-title-input'
                value={this.state.title}
                onChange={this.handleChange}
                onBlur={this.handleSubmit}
                />
            </form>
        )
    }
}

export default CardTitleForm;