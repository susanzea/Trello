import React from "react";

class WorkspacesIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    componentDidMount() {
        this.props.fetchAllUserWorkspaces(this.props.userId)
    }

    render() {
        return(
            <ul className="workspaces-index-list">
                <li>WorkspaceIndexItem</li>
                <li>WorkspaceIndexItem</li>
            </ul>
        )
    }



}

export default WorkspacesIndex;

// {
//     this.props.workspaces.map((workspace) => {
//         return <WorkspaceIndexItem workspace={workspace} />
//     })
// }