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
        if (!this.props.workspaces) {
            return <p>You don't have any workspaces.</p>
        }
        return(
            <ul className="workspaces-index">
                {
                    this.props.workspaces.map((workspace, idx) => {
                        return <WorkspaceIndexItem key={workspace.id} colorNum={idx} destroyWorkspace={(workspaceId) => this.props.destroyWorkspace(workspaceId)} workspace={workspace} />
                    })  
                }
            </ul>
        )
    }



}

export default WorkspacesIndex;

