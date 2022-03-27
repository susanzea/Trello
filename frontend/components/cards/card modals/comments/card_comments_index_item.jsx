import React from 'react';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.comment.id,
            body: props.comment.body,
            user_id: props.comment.user_id,
            card_id: props.comment.card_id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

     handleChange(e) {
        this.setState({ body: e.target.value })
    }  
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.editComment(this.state);
    }

    toggle(e) {
        if (e.target.className === "reveal-comment-edit-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
            $(e.target).prev().hide();
            $(e.target).next().hide();
        } else if (e.target.className === "save-edited-comment") {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        } else if (e.target.className === "hide-comment-edit-form") {
            this.setState({ body: this.props.comment.body })
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        }
    }


    render() {
        return (
        <div>

            <p>{this.props.comment.body}</p>
            <button className='reveal-comment-edit-form'
                onClick={this.toggle} 
                type="button"
            >
                Edit
            </button>

            <button 
                onClick={() => this.props.destroyComment(this.props.comment.id)}
            >
                Delete
            </button>



            <form className='comment-edit-form'
                onSubmit={this.handleSubmit} 
                style={{display: "none"}}
            >
                <input type="text"
                    id='comment-edit-form-input'
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
    )
    }
}

export default CommentsIndexItem;