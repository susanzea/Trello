import React from 'react';
import MainNavBarContainer from '../../navbars/mainNavBar/main_nav_bar_container';
import NoBoardsIndex from './no_boards_index';
import BoardsIndex from './boards_index';

class WorkspaceBoardsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            workspace_id: this.props.workspaceId,
            // user_id: this.props.currentUserId
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.workspaceId !== this.props.match.params.workspaceId) {
            this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
        }
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state);
        this.setState({ title: '' })
    }

    toggle(e) {
        if (e.currentTarget.id === "reveal-board-form") {
            $(e.target).hide();
            $(e.target).siblings().show();
        } else if (e.target.className === "add-board") {
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        } else if (e.target.className === "hide-board-form") {
            this.setState({ title: '' })
            $(e.target.parentElement).hide();
            $(e.target.parentElement).siblings().show();
        }
    }

    render() {
        if (this.props.boards.length === 0) {
            debugger
            return <NoBoardsIndex workspaceId={this.props.workspaceId}/>   
        } else {
            return <BoardsIndex boards={this.props.boards} />
        }
    }
}

export default WorkspaceBoardsIndex;