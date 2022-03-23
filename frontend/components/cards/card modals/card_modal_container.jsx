import React from 'react';
import CardTitleForm from './card_title_form';
import CardDescriptionForm from './card_description_form';
import CardCommentForm from './card_comment_form';
import CardCommentsIndex from './card_comments_index';

function CardModal(props) {

    return (
        <div className='card-modal-background'>
            <div className='modal-container'>
                <button className='close-card-modal' 
                    onClick={() => props.openModal(false)}
                >✕</button>
                <CardTitleForm card={props.card} editCard={props.editCard}/>
                <p>in <span>{props.list.title}</span></p>
                <CardDescriptionForm card={props.card} editCard={props.editCard}/>
                <CardCommentForm card={props.card} 
                    editCard={props.editCard}
                    createComment={props.createComment}
                    destroyComment={props.destroyComment}
                    editComment={props.editComment}
                />
                <CardCommentsIndex card={props.card} 
                    editCard={props.editCard}
                    createComment={props.createComment}
                    destroyComment={props.destroyComment}
                    editComment={props.editComment}
                />
            </div>
        </div>
    )
}

export default CardModal;