import React from "react";

class CardCommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            user_id: props.currentUserId,
            card_id: props.card.id,
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
        this.props.createComment(this.state);
        this.setState({ body: '' })
    }

    toggle(e) {
        if (e.target.className === "reveal-card-comment-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.className === "save-comment") {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        } else if (e.target.className === "hide-card-comment-form") {
            this.setState({ body: '' })
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        }
    }

    render() {
        return (
            <div className="card-new-comment">
                <button className="reveal-card-comment-form" 
                    onClick={this.toggle} 
                    type='submit'>
                    {this.state.body === '' ? "Add a comment..." : this.state.body}    
                </button>

                 <form className='card-comment-form' 
                    onSubmit={this.handleSubmit}
                    style={{display: "none"}}
                >
                        <input type="text"
                            className='card-comment-form-input'
                            placeholder="Add a comment..."
                            value={this.state.body}
                            onChange={this.handleChange}
                        />

                        <div className="card-comment-form-buttons">
                            <button className="save-comment" 
                                type='submit'
                            >
                                Save
                            </button>
                            <button className='hide-card-comment-form' onClick={this.toggle} type="button" >✕</button>
                        </div>
                </form>
            </div>
        )
    }
}

export default CardCommentForm;