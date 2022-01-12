import React from "react";
import WorkspaceIndexItem from "./workspaces_index_item";

class WorkspacesIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        }

        this.setSelected = this.setSelected.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchAllUserWorkspaces(this.props.userId)
    }

    setSelected(idx) {
        this.setState({ selected: idx })
    }

    render() {
        debugger
        if (this.props.workspaces.length === 0) {
            return <p>You don't have any workspaces.</p>
        }

        debugger
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
                        workspace={workspace} />
                    })  
                }
            </ul>
        )
    }



}

export default WorkspacesIndex;

