import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardModal from './card modals/card_modal';

function CardIndexItem (props) {
    // first time using useState to conditionally render a modal below
    const [cardModalOpen, openModal] = useState(false)

    // TODO: need to fetch comments so that I have access to count for icon. need to then make sure to not fetch them again later.
    const [commentCount, setCount] = useState({ count: [] });

    useEffect(async () => {
        const comments = this.props.fetchAllCardComments(this.props.card.id);

        setCount(comments.length);
    }, []);



    return (
            <div className='card-index-item'>
                <li>{props.card.title}</li>
                <button className='card-remove' 
                    onClick={() => props.destroyCard(props.card.id)}
                > — </button>
                <button 
                    className='card-edit' 
                    onClick={() => openModal(true) }
                >✎</button>
                <img src={window.comment_bubble} alt="card comment count bubble icon" />
                <p>{commentCount}</p>
                { cardModalOpen && <CardModal card={props.card}
                    list={props.list}
                    editCard={props.editCard}
                    openModal={openModal}
                    createComment={props.createComment}
                />}
            </div>
        )
}

export default withRouter(CardIndexItem);