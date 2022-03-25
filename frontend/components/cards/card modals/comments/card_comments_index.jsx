import React from "react";

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
                        return <CommentIndexItemContainer
                        />
                    })
                }
            </ul>
        )
    }
}

export default CardCommentsIndex;