import React from 'react';
import { signup } from '../../actions/session_actions'
import { Link } from 'react-router-dom';
import LangMenu from './lang_menu';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

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
        e.preventDefault();
        this.props.signup(this.state);
    }


    render() {
        return(
            <div>
                <h1>Trelloh</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign up for your account</h3>
                    <input type="text" value={this.props.full_name} onChange={this.handleChange('full_name')} placeholder="Enter full name"/>
                    <input type="text" value={this.props.email} onChange={this.handleChange('email')} placeholder="Enter email"/>
                    <input type="text" value={this.props.username} onChange={this.handleChange('username')} placeholder="Enter username"/>
                    <input type="password" value={this.props.password} onChange={this.handleChange('password')} placeholder="Enter password"/>
                    <button type="submit">Sign up</button>
                    <Link to="/login">Already have an account? Log In</Link>
                </form>
                <LangMenu/>
            </div>
        )
    }
}

export default SignupForm;