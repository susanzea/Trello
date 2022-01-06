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

    componentWillUnmount() {
        this.props.removeSessionErrors();
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
        return (
            <div className='session-page'>
                <header className="session-header">
                    <img src={window.trelloh_logo_url} alt="" />
                    <h1>Trelloh</h1>
                </header>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <h2 className="session-form-title">Sign up for your account</h2>
                    {this.displayErrors()}
                    <input className="session-input" type="text" value={this.props.full_name} onChange={this.handleChange('full_name')} placeholder="  Enter full name" />
                    <input className="session-input" type="text" value={this.props.location.state.email} onChange={this.handleChange('email')} placeholder="  Enter email" />
                    <input className="session-input" type="text" value={this.props.username} onChange={this.handleChange('username')} placeholder="  Enter username" />
                    <input className="session-input" type="password" value={this.props.password} onChange={this.handleChange('password')} placeholder="  Enter password" />
                    <button className="session-button" id="signup-button" type="submit">Sign up</button>
                    <hr className='session-hr' />
                    <Link className="session-redirect" id="signup-redirect" to="/login">Already have an account? Log In</Link>
                </form>
                <div className="signup-lang-menu">
                    <LangMenu />
                </div>
                <footer className='session-images'>
                    <img id="session-left" src={window.session_left} alt="" />
                    <img id="session-right" src={window.session_right} alt="" />
                </footer>
            </div>
        )
    }
}

export default QuickSignupForm;