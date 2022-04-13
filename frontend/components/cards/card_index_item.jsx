import React, {useState, useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardModal from './card modals/card_modal';
import regeneratorRuntime from "regenerator-runtime";

function CardIndexItem (props) {
    // first time using useState to conditionally render a modal below
    const [cardModalOpen, openModal] = useState(false);

    // ? need to fetch comments so that I have access to count for icon. need to then make sure to not fetch them again later.
    // const [numComments, setNum] = useState(0);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        props.fetchAllCardComments(props.card.id).then(res => {
            setComments(Object.values(res.comments))
            debugger
        })
        
        
    }, []);
    // console.log(comments.length)

    // useEffect(() => {
    //     setNum(comments.length)

    // }, [])
    // // console.log(numComments)

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
                { comments.length > 0 && 
                    <div className='comment-count-sec'>
                        <img src={window.comment_bubble} alt="card comment count bubble icon" />
                        <p>{comments.length}</p>
                    </div>
                }
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