import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchWorkspaceBoard(this.props.boardId)
    }

    render() {
        return (
            <p>{this.props.boardId}</p>
        )
    }

}

export default Board;