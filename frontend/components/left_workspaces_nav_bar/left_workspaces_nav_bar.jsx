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
        this.toggle = this.toggle.bind(this);
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createWorkspace(this.state);
        this.setState({ title: '' })
    }

    toggle(e) {
        if (e.target.getAttribute('id') === 'show-create-workspace-form') {
            $(e.target).hide();
            $(e.target).prev().show();
        } else {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).next().show();
        }
    }

    render() {
        return(
            <nav className='left-workspaces-nav-bar'>
                <header id='workspaces-index-header'>
                    <div className="workspaces-index-header-title">
                        <h3 id="workspaces-index-title">Workspaces</h3>
                        <form onSubmit={this.handleSubmit} className='create-workspace-form'>
                            <input type="text" id="workspace-input" 
                                onChange={this.handleChange} 
                                value={this.state.title} 
                                placeholder='Enter a title...'
                            />
                            <button id="create-workspace-and-hide-form" onClick={this.toggle}>＋</button>
                        </form>
                        <button id="show-create-workspace-form" className='add' onClick={this.toggle}>＋</button>
                    </div>
                </header>
                <WorkspacesIndexContainer />
            </nav>
        )
    }
}

export default LeftWorkspacesNavBar;