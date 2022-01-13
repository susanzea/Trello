import React from 'react';
import { withRouter} from 'react-router-dom';
import CardIndexItem from '../cards/card_index_item';
import CardFormContainer from '../cards/card_form_container'


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
                                list={this.props.list}
                                key={card.id}
                                card={card}
                            />)
                        })
                    }
                    <li><CardFormContainer list={this.props.list}/></li>
                </ul>


                <button 
                    onClick={() => this.props.destroyList(this.props.list.id)}
                > 
                    — 
                </button>
            </div>
        )
    }
}

export default withRouter(ListIndexItem);