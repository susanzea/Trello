import { connect } from 'react-redux'
import DeleteWorkspaceItemModal from './delete_workspace_item_modal'

const mapStateToProps = (state, ownProps) => {
    debugger

    return {
        next_workspace: Object.values(state.entities.workspaces)[0]
    }
}


export default connect(mapStateToProps, null)(DeleteWorkspaceItemModal);