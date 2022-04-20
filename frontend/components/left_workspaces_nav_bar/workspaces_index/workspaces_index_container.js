import { connect } from "react-redux";
import WorkspacesIndex from "./workspaces_index";
import { withRouter } from 'react-router-dom'
import { fetchAllUserWorkspaces, fetchUserWorkspace, destroyWorkspace, editWorkspace } from "../../../actions/workspace_actions";

const mapStateToProps = (state, ownProps) => {

    // if (ownProps.location.pathname === '/home') {
    //     let pathnameWildcard = NaN
    // } else {
    //     let pathnameWildcard = parseInt(ownProps.location.pathname.slice(12,-7))
    // }

    return{
        userId: state.session.id,
        workspaces: Object.values(state.entities.workspaces),
        pathname: ownProps.location.pathname
        // selectedWorkspaceId: pathnameWildcard
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkspacesIndex));