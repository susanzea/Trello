import React from 'react';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.fetchWorkspaceBoard(this.props.boardId)
    }

    render() {
        debugger
        return (
            <div className="board">
                <h2>Board</h2>
                <button>+ Add a list</button>
            </div>
        )
    }

}

export default Board;