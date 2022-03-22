import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardModal from './card modals/card_modal_container';

function CardIndexItem (props) {
    // first time using useState to conditionally render a modal below
    const [cardModalOpen, openModal] = useState(false)

        return (
            <div className='card-index-item'>
                <li>{props.card.title}</li>
                <button className='card-remove' onClick={() => props.destroyCard(props.card.id)}> — </button>
                <button 
                    className='card-edit' 
                    onClick={() => openModal(true) }
                >✎</button>
                { cardModalOpen && <CardModal card={props.card}
                    editCard={props.editCard}
                    openModal={openModal}
                />}
            </div>
        )
}

export default withRouter(CardIndexItem);