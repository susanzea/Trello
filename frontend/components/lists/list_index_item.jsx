import React from 'react';
import { withRouter} from 'react-router-dom';
import CardIndexItem from '../cards/card_index_item';


class ListIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        debugger
        return (
            <div className='list-index-item'>
                <h1>{this.props.list.title}</h1>
                <ul className='card-index'>
                    {
                        this.props.cards.map((card, idx) => {
                            debugger
                            return (<CardIndexItem
                                key={card.id}
                                card={card}
                            />)
                        })
                    }
                    <li>CardFormContainer</li>
                </ul>


                <button 
                    onClick={() => this.props.destroyList(this.props.list.id)}
                > 
                    — 
                </button>
                <button> + Add a new card </button>
            </div>
        )
    }
}

export default withRouter(ListIndexItem);