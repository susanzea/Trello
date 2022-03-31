import React, { useEffect } from 'react';
import CardTitleForm from './card_title_form';
import CardDescriptionForm from './card_description_form';
import CardCommentFormContainer from './comments/card_comment_form_container';
import CardCommentsIndexContainer from './comments/card_comments_index_container';

function CardModal(props) {

    return (
        <div className='card-modal-background'>
            <div className='card-modal-container'>
                
                <div className='card-modal-header'>
                    <button className='close-card-modal' 
                        onClick={() => props.openModal(false)}
                    >✕</button>

                    <section className='card-modal-title'>
                        <img className='card-title-icon card-icon' 
                            src={window.card_title_icon} 
                            alt="card title icon" 
                        />
                        <div>
                            <CardTitleForm card={props.card} editCard={props.editCard}/>
                            <p>in list <span>{props.list.title}</span></p>
                        </div>
                    </section>
                </div>

                <section className='card-modal-description'>
                    <div className='card-description-header'>
                        <img className='card-description-icon card-icon' 
                            src={window.card_description_icon} 
                            alt="card description icon" 
                        />
                        <h1>Description</h1>
                    </div>
                    <CardDescriptionForm card={props.card} editCard={props.editCard}/>
                </section>
                
                <section className='card-modal-activity'>
                    <div className='card-activity-header'>
                        <img className='card-activity-icon card-icon' 
                            src={window.card_activity_icon} 
                            alt="card activity icon" 
                        />
                        <h1>Activity</h1>
                    </div>

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