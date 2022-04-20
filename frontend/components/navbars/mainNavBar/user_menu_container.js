import { connect } from 'react-redux'
import UserMenu from './user_menu'
import { fetchUser } from '../../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
    // debugger

    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    // debugger

    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);