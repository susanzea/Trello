import { connect } from "react-redux";
import WorkspacesIndex from "./workspaces_index";
import { fetchAllUserWorkspaces, destroyWorkspace } from "../../../actions/workspace_actions";

const mapStateToProps = state => {
    return{
        userId: state.entities.users[state.session.id].id,
        workspaces: Object.values(state.entities.workspaces)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUserWorkspaces: (userId) => dispatch(fetchAllUserWorkspaces(userId)),
        destroyWorkspace: (workspaceId) => dispatch(destroyWorkspace(workspaceId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspacesIndex);