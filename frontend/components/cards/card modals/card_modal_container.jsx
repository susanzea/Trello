import React from 'react';

function CardModal(props) {
    return (
        <div className='card-modal-background'>
            <div className='modal-container'>
                <button className='close-card-modal' onClick={() => props.openModal(false)}>✕</button>
                <h1>{props.card.title}</h1>
                <h2>description</h2>
                <h2>comments</h2>
            </div>
        </div>
    )
}

export default CardModal;