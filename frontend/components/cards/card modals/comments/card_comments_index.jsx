import React from "react";
import CommentsIndexItem from "./card_comments_index_item";

class CardCommentsIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.fetchAllCardComments(this.props.card.id)
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        return null;
    }

    render() {
        if (!this.props.comments) {
            return <p>loading comments</p>
        }


        return (
            <ul className='comments-index'>
                {
                    this.props.comments.map((comment, idx) => {
                        return <CommentsIndexItem comment={comment} key={idx} />
                    })
                }
            </ul>
        )
    }
}

export default CardCommentsIndex;