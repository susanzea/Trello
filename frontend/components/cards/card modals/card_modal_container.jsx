import React from 'react';
import CardTitleForm from './card_title_form';
import CardDescriptionForm from './card_description_form';
import CardCommentForm from './card_comment_form';
import CardCommentsIndex from './card_comments_index';

function CardModal(props) {
    return (
        <div className='card-modal-background'>
            <div className='modal-container'>
                <button className='close-card-modal' onClick={() => props.openModal(false)}>✕</button>
                <CardTitleForm card={props.card} editCard={props.editCard}/>
                <CardDescriptionForm card={props.card} editCard={props.editCard}/>
                <CardCommentForm card={props.card} editCard={props.editCard}/>
                <CardCommentsIndex card={props.card} editCard={props.editCard}/>
                <h1>{props.card.title}</h1>
                <h2>description</h2>
                <h2>comments</h2>
            </div>
        </div>
    )
}

export default CardModal;