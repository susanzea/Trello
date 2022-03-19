import React, {useState} from 'react';

function CardModal(props) {
    // first time using useState for a modal below
    const [cardModalOpen, openModal] = useState(false)

    return (
        <div className='card-modal-background'>
            <div className='modal-container'>
                <button onClick={() => openModal(true)}>x</button>
                <h1>card content</h1>
                <h2>description</h2>
                <h2>comments</h2>
            </div>
        </div>
    )
}

export default CardModal;