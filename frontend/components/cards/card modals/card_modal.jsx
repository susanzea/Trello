import React, { useEffect } from 'react';
import CardTitleForm from './card_title_form';
import CardDescriptionForm from './card_description_form';
import CardCommentFormContainer from './comments/card_comment_form_container';
import CardCommentsIndexContainer from './comments/card_comments_index_container';

function CardModal(props) {

    return (
        <div className='card-modal-background'>
            <div className='modal-container'>
                <button className='close-card-modal' 
                    onClick={() => props.openModal(false)}
                >✕</button>

                <section className='card-modal-title'>
                    <img id='card-title-icon' 
                        src={window.card_title_icon} 
                        alt="card title icon" 
                    />
                    <div>
                        <CardTitleForm card={props.card} editCard={props.editCard}/>
                        <p>in list <span>{props.list.title}</span></p>
                    </div>
                </section>

                <section className='card-modal-description'>
                    <div className='card-description-header'>
                        <img id='card-description-icon' 
                            src={window.card_description_icon} 
                            alt="card description icon" 
                        />
                        <h1>Description</h1>
                    </div>
                    <CardDescriptionForm card={props.card} editCard={props.editCard}/>
                </section>
                
                <section className='card-modal-activity'>
                    <img id='card-activity-icon' 
                        src={window.card_activity_icon} 
                        alt="card activity icon" 
                    />
                    <CardCommentFormContainer card={props.card} 
                        editCard={props.editCard}
                        createComment={props.createComment}
                        destroyComment={props.destroyComment}
                        editComment={props.editComment}
                    />
                    <CardCommentsIndexContainer card={props.card} 
                        editCard={props.editCard}
                        createComment={props.createComment}
                        destroyComment={props.destroyComment}
                        editComment={props.editComment}
                    />
                </section>
            </div>
        </div>
    )
}

export default CardModal;