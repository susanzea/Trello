import { connect } from "react-redux";
import WorkspacesIndex from "./workspaces_index";
import { fetchAllUserWorkspaces, fetchUserWorkspace, destroyWorkspace, editWorkspace } from "../../../actions/workspace_actions";

const mapStateToProps = (state, ownProps) => {
    debugger
    return{
        userId: state.entities.users[state.session.id].id,
        workspaces: Object.values(state.entities.workspaces)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserWorkspace: (userId) => dispatch(fetchUserWorkspace(userId)),
        fetchAllUserWorkspaces: (userId) => dispatch(fetchAllUserWorkspaces(userId)),
        destroyWorkspace: (workspaceId) => dispatch(destroyWorkspace(workspaceId)),
        editWorkspace: (workspace) => dispatch(editWorkspace(workspace))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspacesIndex);