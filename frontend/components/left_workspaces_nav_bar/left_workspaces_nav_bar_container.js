import { connect } from 'react-redux';
import LeftWorkspacesNavBar from './left_workspaces_nav_bar';
import { createWorkspace } from '../../actions/workspace_actions';



const mapStateToProps = state => {
    return {
        userId: state.session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createWorkspace: (workspace) => dispatch(createWorkspace(workspace))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftWorkspacesNavBar)