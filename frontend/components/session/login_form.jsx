import React from 'react';
import { login } from '../../actions/session_actions'
import { Link } from 'react-router-dom';
import LangMenu from './lang_menu';


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
        e.preventDefault;
        this.props.login(this.state)
    }


    render() {
        return (
            <div>
                <h1>Trelloh</h1>
                <form onSubmit={this.handleSubmit}>
                    <h3>Log in to Trello</h3>
                    <input type="text" value={this.props.email} placeholder="Enter email" onChange={this.handleChange('email')} />
                    <input type="password" value={this.props.password} placeholder="Enter password" onChange={this.handleChange('password')} />
                    <button type="submit">Log in</button>
                    <footer>
                        <button>Can't log in?</button>
                        <Link to="/signup">Sign up for an account</Link>
                    </footer>
                </form>
                <LangMenu/>
            </div>
        )
    }
}

export default LoginForm;