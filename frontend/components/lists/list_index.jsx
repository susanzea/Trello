import React from 'react';
import ListIndexItem from './list_index_item';
import ListFormContainer from '../lists/list_form_container';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        return (
        <ul className='list-index'>
            {
                this.props.lists.map((list, idx) => {
                    return <ListIndexItem
                        className='list-index-item'
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