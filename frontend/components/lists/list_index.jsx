import React from 'react';
import ListIndexItemContainer from './list_index_item_container';
import ListFormContainer from '../lists/list_form_container';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllBoardLists(this.props.boardId)
    }

    render() {
        if (!this.props.lists) {
            return <p>loading!!</p>
        }

        return (
        <ul className='list-index'>
            {
                this.props.lists.map((list, idx) => {
                    return <ListIndexItemContainer
                        key={list.id}
                        list={list}
                    />
                })
            }
            <li><ListFormContainer /></li>
        </ul>
        )
    }

}

export default ListIndex;