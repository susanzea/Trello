import React from 'react';
import CardContentForm from './card_content_form';
import CardDescriptionForm from './card_description_form';
import CardCommentForm from './card_comment_form';
import CardCommentsIndex from './card_comments_index';

function CardModal(props) {
    return (
        <div className='card-modal-background'>
            <div className='modal-container'>
                <button className='close-card-modal' onClick={() => props.openModal(false)}>✕</button>
                <CardContentForm card={props.card} />
                <CardDescriptionForm card={props.card} />
                <CardCommentForm card={props.card} />
                <CardCommentsIndex card={props.card} />
                <h1>{props.card.title}</h1>
                <h2>description</h2>
                <h2>comments</h2>
            </div>
        </div>
    )
}

export default CardModal;