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
        if (prevProps.comments.length !== this.props.comments.length) {
            // console.log(this.props.comments)
            // this.props.fetchAllCardComments(this.props.card.id)
            this.setState({ comments: this.props.comments })
        }

    }

    render() {
        if (!this.props.comments) {
            return <p>loading comments</p>
        }

        return (
            <ul className='comments-index'>
                {
                    this.state.comments.map((comment, idx) => {
                        // console.log(this.state.comments)
                        return <CommentsIndexItemContainer comment={comment} />
                    })
                }
            </ul>
        )
    }
}

export default CardCommentsIndex;