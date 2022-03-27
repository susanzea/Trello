import React from 'react';

class BoardTitleEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.board.id,
            title: props.board.title,
            workspaceId: props.board.workspace_id
        }
    }


    render() {
        debugger
        return(
            <h2>{this.state.title}</h2>
        )
    }
}

export default BoardTitleEditForm