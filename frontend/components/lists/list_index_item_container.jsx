import ListIndexItem from './list_index_item'
import { connect } from 'react-redux';
import { destroyList } from '../../actions/list_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        destroyList: (listId) => dispatch(destroyList(listId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndexItem);
