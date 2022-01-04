import React from 'react';
import SplashContent from './splash_content';
import SplashNavBar from '../navbars/splash_nav_bar';

class QuickSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    onChange(e) {

    }

    render() {
        return (
            <div className="splash">
                <SplashNavBar />
                <form className='splash-form'>
                    <SplashContent />
                    <section className='quick-signup-section'>
                        <input id="quick-signup-input" type="text" placeholder="Email"/>
                        <button className='splash-button' id="quick-signup-button">Sign up-it's free!</button>
                    </section>
                </form>
                <img id="root-img" src="/images/splash/root-img.png" alt="" />
            </div>
        )
    }
}

export default QuickSignup;