import React from 'react';
import { login } from '../../actions/session_actions'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        return null;
    }


    render() {
        return (
            <div>
                <img src="/Users/susanzea/Desktop/Fullstack_Proj/Trelloh_proj/app/assets/images/trello-logo-blue.svg" alt="" />
                <form onSubmit={this.handleSubmit}>
                    <h1>Log in to Trello</h1>
                    <label>Email
                        <input type="text" value={this.props.email} onChange={this.handleChange('email')} />
                    </label>
                    <label>Password
                        <input type="password" value={this.props.password} onChange={this.handleChange('password')} />
                    </label>
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;