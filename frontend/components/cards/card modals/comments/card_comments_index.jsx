import React from "react";

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
                        return <p>{comment.body}</p>
                    })
                }
            </ul>
        )
    }
}

export default CardCommentsIndex;