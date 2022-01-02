import React from 'react';
import SplashContent from './splash_content';
import NavBarContainer from '../components/navbars/nav_bar_container';

class QuickSignup extends React.Component {

    render() {
        return (
            <div className="splash">
                <SplashContent/>
                <form>
                    <input type="text" />
                    <button>Sign up-it's free!</button>
                </form>
            </div>
        )
    }
}

export default QuickSignup;