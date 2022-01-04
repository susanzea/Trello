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
        const user = ({
            username: 'demo_user',
            email: 'demo@user.com',
            full_name: 'Demo User',
            password: 'password'
        });
        this.props.login(user);
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
            <div className='session-form'>
                <h1>Trelloh</h1>
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h3>Log in to Trello</h3>
                    {this.displayErrors()}
                    <input type="text" value={this.props.email} placeholder="Enter email" onChange={this.handleChange('email')} />
                    <input type="password" value={this.props.password} placeholder="Enter password" onChange={this.handleChange('password')} />
                    <button type="submit">Log in</button>
                    <p>OR</p>
                    <hr />
                    <button onClick={this.handleDemoUser}>Log in as Demo User</button>
                    <footer>
                        <button>Can't log in?</button>
                        <Link to="/signup">Sign up for an account</Link>
                    </footer>
                </form>
                <LangMenu className="lang-menu"/>
                <footer className='session-images'>
                    <img src="/images/session_forms/login_form/left.png" alt="" className='session-img' />
                    <img src="/images/session_forms/login_form/right.png" alt="" className='session-img' />
                </footer>
            </div>
        )
    }
}

export default LoginForm;