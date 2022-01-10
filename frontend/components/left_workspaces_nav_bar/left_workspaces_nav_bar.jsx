import React from 'react';
import WorkspacesIndexContainer from './workspaces_index/workspaces_index_container'

class LeftWorkspacesNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user_id: this.props.userId
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createWorkspace(this.state);
        this.setState({ title: '' })
    }


    render() {
        return(
            <nav className='left-workspaces-nav-bar'>
                <header id='workspaces-index-header'>
                    <h3 id="workspaces-index-title">Workspaces</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} value={this.state.title} />
                        <button>+</button>
                    </form>
                </header>
                <WorkspacesIndexContainer />
            </nav>
        )
    }
}

export default LeftWorkspacesNavBar;