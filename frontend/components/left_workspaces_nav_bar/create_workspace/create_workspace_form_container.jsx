import CreateWorkspaceForm from './create_workspace_form';
import { connect } from 'react-redux';
import { createWorkspace } from '../../../actions/workspace_actions';

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createWorkspace: (workspace) => dispatch(createWorkspace(workspace))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkspaceForm);