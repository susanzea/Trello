import React from 'react';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.comment.id,
            body: props.comment.body,
            user_id: props.comment.user_id,
            card_id: props.comment.card_id,
            body_two: props.comment.body
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.props.fetchCommentUser(this.state.user_id);
        // console.log(this.props.comment)
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.comment.id !== prevProps.comment.id) {
            // console.log(this.props.comment)
            this.setState({ 
                id: this.props.comment.id,
                body: this.props.comment.body,
                user_id: this.props.comment.user_id,
                card_id: this.props.comment.card_id 
            })
        }

        // if () {
        //     // console.log(this.props.comment)
        //     this.setState({ 
        //         id: this.props.comment.id,
        //         body: this.props.comment.body,
        //         user_id: this.props.comment.user_id,
        //         card_id: this.props.comment.card_id 
        //     })
        // }
    }

     handleChange(e) {
        this.setState({ body: e.target.value })
    }  
    
    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.editComment(this.state);
    }

    toggle(e) {
        // let prevState = this.state.body

        if (e.target.className === 'reveal-comment-edit-form edit-comment') {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
            $(e.target.parentElement).prev().hide();
            // $(e.target).next().hide();
        } else if (e.target.className === "save-edited-comment") {
            this.setState({ body2: this.state.body })
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        } else if (e.target.className === "hide-comment-edit-form") {
            this.setState({ body: this.state.body2 })
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        }
    }


    render() {
        // * fix delete bug
        // console.log(this.props.comment)

        return (
        <div className='comment-index-item'>
            <div className='commenter-icon'>
                    <img src={window.generic_user_icon} alt="generic user icon" />
            </div>
            <div className='comment-index-item-main'>
                <p className='commenter-name'>{this.props.commenter.full_name}</p>
                <p className='comment-body'>{this.state.body}</p>
                <div className='comment-index-item-buttons'>
                    <button className='reveal-comment-edit-form edit-comment'
                        onClick={this.toggle} 
                        type="button"
                    >
                        Edit 
                    </button>
                    <p className='comment-hyphen'> - </p>
                    <button 
                        className='delete-comment'
                        onClick={() => this.props.destroyComment(this.props.comment.id)}
                    >
                        Delete
                    </button>
                </div>

                <form className='comment-edit-form'
                    onSubmit={this.handleSubmit} 
                    style={{display: "none"}}
                >
                    <input type="text"
                        className='comment-edit-form-input'
                        placeholder="You haven't typed anything!"
                        value={this.state.body}
                        onChange={this.handleChange}
                    />

                    <button className="save-edited-comment" 
                        onClick={this.toggle}
                        type='submit'
                    >
                        Save
                    </button>

                    <button className='hide-comment-edit-form' 
                        onClick={this.toggle} 
                        type="button" 
                    >
                        ✕
                    </button>
                </form>
            </div>
        </div>
    )
    }
}

export default CommentsIndexItem;