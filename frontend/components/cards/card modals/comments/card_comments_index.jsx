import React from "react";
import CommentsIndexItemContainer from "./card_comments_index_item_container";

class CardCommentsIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: props.comments
        }
    }

    componentDidMount() {
        this.props.fetchAllCardComments(this.props.card.id)
    }

    componentDidUpdate(prevProps, prevState) {
        const compare = prevProps.comments.length !== this.props.comments.length
        const curr = prevProps.comments !== this.props.comments
        debugger

        if (prevProps.comments.length !== this.props.comments.length) {
            debugger
            this.props.fetchAllCardComments(this.props.card.id)
            // this.setState({ comments: this.props.comments })
        }
    }

    render() {
        if (!this.props.comments) {
            return <p>loading comments</p>
        }

        console.log(this.props.comments)

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