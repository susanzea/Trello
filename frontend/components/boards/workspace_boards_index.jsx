import React from 'react';
import MainNavBarContainer from '../navbars/mainNavBar/main_nav_bar_container';
import BoardsIndexItem from './boards_index_item';

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
        // need to figure out hot to trigger update after adding new board
        if (prevProps.match.params.workspaceId !== this.props.match.params.workspaceId) {
            this.props.fetchAllWorkspaceBoards(this.props.workspaceId)
        }
    }

    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.createBoard(this.state);
        this.setState({ title: '' })
        debugger
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
        if (!this.props.boards) {
            return <p>Create a board!</p>
        }
        return (
            <div className='workspace-boards-index'>
                <header>
                    <img src={window.generic_user_icon} alt="generic user icon" />
                    <h2>Workspace Boards</h2>
                </header>
                <ul className="boards-index-list">
                    {
                        this.props.boards.map((board, idx) => {
                            return <BoardsIndexItem 
                            key={board.id+idx} idx={idx} 
                            destroyBoard={(boardId) => this.props.destroyBoard(boardId)} 
                            board={board} />
                        })
                    }


                    <button className="boards-index-button" 
                        id="reveal-board-form" 
                        onClick={this.toggle}
                    >
                        Create new board
                    </button>

                    <form className='board-form' style={{display: "none"}} onSubmit={this.handleSubmit}>
                        <input type="text"
                            id='board-form-input'
                            placeholder='Enter a title for the board...'
                            value={this.state.title}
                            onChange={this.handleChange}
                        />

                        <button className="add-board" 
                            type='submit'
                        >
                            Add board
                        </button>

                        <button className='hide-board-form' 
                            onClick={this.toggle} 
                            type="button" 
                        >
                            ✕
                        </button>
                    </form>



                </ul>
            </div>
        )
    }
}

export default WorkspaceBoardsIndex;