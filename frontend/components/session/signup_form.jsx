import React from 'react';
import { signup } from '../../actions/session_actions'


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        debugger

        this.state = {
            username: '',
            email: '',
            full_name: '',
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
        debugger
        e.preventDefault();
        this.props.signup(this.state);
    }


    render() {
        return(
            <div>
                <h1>Sign up for your account</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={this.props.full_name} onChange={this.handleChange('full_name')}/>
                    </label>
                    <label>Email
                        <input type="text" value={this.props.email} onChange={this.handleChange('email')}/>
                    </label>
                    <label>Username
                        <input type="text" value={this.props.username} onChange={this.handleChange('username')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.props.password} onChange={this.handleChange('password')}/>
                    </label>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        )
    }
}

export default SignupForm;