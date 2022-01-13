import React from 'react';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        return (<li>{this.props.card.title}</li>)
    }
}

export default CardIndexItem;