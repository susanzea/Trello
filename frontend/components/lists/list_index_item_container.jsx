import ListIndexItem from './list_index_item'
import { connect } from 'react-redux';
import { destroyList } from '../../actions/list_actions'
import { fetchAllListCards } from '../../actions/card_actions'

const mapStateToProps = (state, ownProps) => {
    debugger
    const getListCard = (listId) => {
        debugger //fixed return below. it was resulting in an empty array each time
        return Object.values(state.entities.cards).filter(card =>
            card.list_id === listId
        )
    }

    debugger
    return {
        cards: getListCard(ownProps.list.id)
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        destroyList: (listId) => dispatch(destroyList(listId)),
        fetchAllListCards: (listId) => dispatch(fetchAllListCards(listId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndexItem);
