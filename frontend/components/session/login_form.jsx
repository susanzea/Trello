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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
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
        this.props.login(this.state);
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.setState({ email: 'demo@user.com' })
        this.setState({ password: 'password' })
        const user = ({
            username: 'demo_user',
            email: 'demo@user.com',
            full_name: 'Demo User',
            password: 'password'
        });
        this.props.login(user);
        // this.handleSubmit(e);
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
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h2 className="session-form-title">Log in to Trello</h2>
                    {this.displayErrors()}
                    <input className="session-input" type="text" value={this.props.email} placeholder="  Enter email" onChange={this.handleChange('email')} />
                    <input className="session-input" type="password" value={this.props.password} placeholder="  Enter password" onChange={this.handleChange('password')} />
                    <button type="submit" className="session-button">Log in</button>
                    <button onClick={this.handleDemoUser} className="session-button">Log in as Demo User</button>
                    <hr className='session-hr' />
                    <footer className='login-redirect-footer'> 
                        <Link className="session-redirect" to={`/login`}>Can't log in?</Link>&nbsp;
                        <p>·</p>&nbsp;
                        <Link to={`/signup`} className="session-redirect">Sign up for an account</Link>
                    </footer>
                </form>
                <footer className='terms-footer'>
                    <p>Privacy Policy</p>
                    <p>·</p>
                    <p>Terms of Service</p>
                </footer>
                <div className="login-lang-menu">
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

export default LoginForm;