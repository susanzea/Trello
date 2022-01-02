import React from 'react';
import SplashContent from './splash_content';

class QuickSignup extends React.Component {

    render() {
        return (
            <div>
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