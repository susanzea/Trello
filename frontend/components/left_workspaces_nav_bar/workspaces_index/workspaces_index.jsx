import React from "react";
import WorkspaceIndexItem from "./workspaces_index_item";

class WorkspacesIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: props.workspace.id,
        }

        this.setSelected = this.setSelected.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUserWorkspaces(this.props.userId)
    }

    setSelected(idx) {
        this.setState({ selected: idx })
    }

    render() {
        if (this.props.workspaces.length === 0) {
            return <p>You don't have any workspaces.</p>
        }

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

