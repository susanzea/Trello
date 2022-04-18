import React from "react";
import WorkspaceIndexItem from "./workspaces_index_item";

class WorkspacesIndex extends React.Component {
    constructor(props) {
        super(props);
        // debugger

    // if (props.pathname === '/home') {
    //     let pathnameWildcard = NaN
    //     debugger
    // } else {
    //     let pathnameWildcard = parseInt(props.pathname.slice(12,-7))
    //     debugger
    // }

    // debugger
        this.state = {
            selected: parseInt(props.pathname.slice(12,-7))
        }

        // debugger

        this.setSelected = this.setSelected.bind(this);
    }

    componentDidMount() {
        // debugger
        this.props.fetchAllUserWorkspaces(this.props.userId)
        // .then(() => this.props.fetchUserWorkspace(selectedWorkspaceId))
    }

    setSelected(id) {
        // debugger
        this.setState({ selected: id })
    }

    render() {
        if (this.props.workspaces.length === 0) {
            return <p>You don't have any workspaces.</p>
        }

        // debugger
        return(
            <ul className="workspaces-index">
                {
                    this.props.workspaces.map((workspace, idx) => {
                        return <WorkspaceIndexItem 
                        selected={this.state.selected} 
                        key={workspace.id} 
                        idx={idx} 
                        setSelected={(idx) => this.setSelected(idx)} 
                        destroyWorkspace={(workspaceId) => this.props.destroyWorkspace(workspaceId)}
                        editWorkspace={(workspace) => this.props.editWorkspace(workspace)} 
                        workspace={workspace} />
                    })  
                }
            </ul>
        )
    }



}

export default WorkspacesIndex;

