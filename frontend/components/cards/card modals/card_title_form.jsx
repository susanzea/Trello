import React from "react";


class CardTitleForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.card.title
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value });
        console.log(this.state.title)
        // TODO: figure out how to implement edit func. State is currently updating properly.
        return null;
    }


    render() {
        return (
            <form className='card-title-form'>
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