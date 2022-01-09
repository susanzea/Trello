import { connect } from "react-redux";
import WorkspacesIndex from "./workspaces_index";
import { fetchAllUserWorkspaces } from "../../actions/workspace_actions";

const mapStateToProps = state => {
    debugger
    return{
        userId: state.entities.users[state.session.id].id,
        workspaces: state.entities.workspaces
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUserWorkspaces: (userId) => dispatch(fetchAllUserWorkspaces(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspacesIndex);