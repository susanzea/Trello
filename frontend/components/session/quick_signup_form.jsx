import React from 'react';
import { signup } from '../../actions/session_actions'
import { Link } from 'react-router-dom';
import LangMenu from './lang_menu';

class QuickSignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: `${this.props.quick_email}`,
            full_name: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayErrors = this.displayErrors.bind(this);
    }

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        epreventDefault();
        this.props.signup(this.state);
    }

    displayErrors() {
        return (
            <ul className='signup-errors'>
                {
                    this.props.errors.map((err, idx) => (
                        <li key={idx}>
                            {err}
                        </li>
                    ))
                }
            </ul>
        )
    }


    render() {
        console.log('quick signup form!!!!!!')
        console.log(this.props.location.state.email)
        return (
            <div className='session-form'>
                <h1>Trelloh</h1>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <h3>Sign up for your account</h3>
                    {this.displayErrors()}
                    <input type="text" value={this.props.full_name} onChange={this.handleChange('full_name')} placeholder="Enter full name" />
                    <input type="text" value={this.props.location.state.email} onChange={this.handleChange('email')} placeholder="Enter email" />
                    <input type="text" value={this.props.username} onChange={this.handleChange('username')} placeholder="Enter username" />
                    <input type="password" value={this.props.password} onChange={this.handleChange('password')} placeholder="Enter password" />
                    <button type="submit">Sign up</button>
                    <Link to="/login">Already have an account? Log In</Link>
                </form>
                <LangMenu />
            </div>
        )
    }
}

export default QuickSignupForm;