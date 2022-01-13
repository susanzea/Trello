import React from 'react';
import { withRouter } from 'react-router-dom';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger //should have accesss to destroy card
        return (
            <div className='card-index-item'>
                <li>{this.props.card.title}</li>
                <button onClick={() => this.props.destroyCard(this.props.card.id)}> - </button>
            </div>
        )
    }
}

export default withRouter(CardIndexItem);