import LogoHomeButton from "./logo_home_button";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// TODO: need to fix fetching workspace

const mapStateToProps = (state) => {
    if (state.entities.workspaces.length === 0) {
        return null;
    }

    return {
        workspaceId: Object.values(state.entities.workspaces)[0]
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchAllCardComments: (cardId) => dispatch(fetchAllCardComments(cardId))
//     }
// }

export default withRouter(connect(mapStateToProps, null)(LogoHomeButton));