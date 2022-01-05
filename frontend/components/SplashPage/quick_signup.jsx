import React from 'react';
import SplashContent from './splash_content';
import SplashNavBar from '../navbars/splash_nav_bar';
import { withRouter, Link } from 'react-router-dom';

class QuickSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quick_email: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ quick_email: e.target.value })
    }

    render() {
        return (
            <div className="splash">
                <SplashNavBar />
                <form className='splash-form'>
                    <SplashContent />
                    <section className='quick-signup-section'>
                        <input id="quick-signup-input" type="text" placeholder="Email" onChange={this.handleChange} value={this.props.quick_email}/>
                        <Link 
                            className='splash-button' 
                            id="quick-signup-button"
                            to={{
                                state: {
                                    email: this.state.quick_email,
                                },
                                pathname: "/quick/sign"
                            }
                                
                            }>Sign up-it's free!</Link>
                    </section>
                </form>
                <img id="root-img" src={window.splash_robo} alt="" />
            </div>
        )
        debugger
    }
}

export default withRouter(QuickSignup);