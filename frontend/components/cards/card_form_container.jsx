import CardForm from "./card_form";
import { connect } from 'react-redux';
import { createCard, destroyCard } from "../../actions/card_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        listId: ownProps.match.params.list_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCard: (card) => dispatch(createCard(card))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardForm));