import React from 'react';
import CardIndexItemContainer from './card_index_item_container';
import CardFormContainer from '../cards/card_form_container';

class CardIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllListCards(this.props.listId)
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.lists === this.props.lists) {
            this.props.fetchAllListCards(parseInt(this.props.lists[0].id))
        }
    }



    render() {
        if (!this.props.cards) {
            return <p>loading cards!!</p>
        }


        return (
            <ul className='card-index'>
                {
                    this.props.cards.map((card, idx) => {
                        return <CardIndexItemContainer
                        />
                    })
                }
            </ul>
        )

        // return (
        //     <ul className='card-index'>
        //         {
        //             this.props.cards.map((card, idx) => {
        //                 return <CardIndexItemContainer
        //                     key={card.id}
        //                     card={card}
        //                 />
        //             })
        //         }
        //         <li><CardFormContainer /></li>
        //     </ul>
        // )
    }

}



export default CardIndex;