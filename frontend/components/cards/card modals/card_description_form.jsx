import React from "react";

class CardDescriptionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: this.props.card.description
        }
    }


    render() {
        return (
            <div>
                <br />
                <br />
                <form action="">
                    <h1>Description</h1>
                    <p>
                        {this.state.description === undefined ? "Add a more detailed description..." : this.state.description}    
                    </p>
                </form>
                <br />
                <br />
            </div>
        )
    }
}

export default CardDescriptionForm;