import React from "react";
import CommentsIndexItemContainer from "./card_comments_index_item_container";

class CardCommentsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllCardComments(this.props.card.id)
    }

    render() {
        if (!this.props.comments) {
            return <p>loading comments</p>
        }


        return (
            <ul className='comments-index'>
                {
                    this.props.comments.map((comment, idx) => {
                        return <CommentsIndexItemContainer comment={comment} key={idx} />
                    })
                }
            </ul>
        )
    }
}

export default CardCommentsIndex;