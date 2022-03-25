import React, { useEffect } from 'react';
import CardTitleForm from './card_title_form';
import CardDescriptionForm from './card_description_form';
import CardCommentFormContainer from './comments/card_comment_form_container';
import CardCommentsIndex from './comments/card_comments_index';

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
                <CardCommentFormContainer card={props.card} 
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