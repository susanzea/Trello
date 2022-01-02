import React from 'react';
import SplashContent from './splash_content';
import NavBarContainer from '../components/navbars/nav_bar_container';

class QuickSignup extends React.Component {

    render() {
        return (
            <div className="splash">
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