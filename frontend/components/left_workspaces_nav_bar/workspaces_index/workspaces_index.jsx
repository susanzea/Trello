import React from "react";
import WorkspaceIndexItem from "./workspaces_index_item";

class WorkspacesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUserWorkspaces(this.props.userId)
    }

    render() {
        debugger
        if (!this.props.workspaces) {
            return <p>You don't have any workspaces.</p>
        }
        return(
            <ul className="workspaces-index">
                {
                    this.props.workspaces.map((workspace) => {
                        return <WorkspaceIndexItem key={workspace.id} workspace={workspace} />
                    })  
                }
            </ul>
        )
    }



}

export default WorkspacesIndex;

