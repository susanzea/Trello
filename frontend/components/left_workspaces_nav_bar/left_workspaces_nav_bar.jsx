import React from 'react';
import WorkspacesIndexContainer from './workspaces_index/workspaces_index_container'

class LeftWorkspacesNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className='left-workspaces_nav_bar'>
                <header className=''>
                    <h3>Workspaces</h3>
                    <button>+</button>
                </header>
                <WorkspacesIndexContainer />
            </nav>
        )
    }
}

export default LeftWorkspacesNavBar;