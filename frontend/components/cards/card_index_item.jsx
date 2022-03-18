import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardModal from './card_modal_container';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card-index-item'>
                <li>{this.props.card.title}</li>
                <button onClick={() => this.props.destroyCard(this.props.card.id)}> — </button>
                <Link

                >
                    <p>e</p>
                </Link>
                <CardModal />
            </div>
        )
    }
}

export default withRouter(CardIndexItem);