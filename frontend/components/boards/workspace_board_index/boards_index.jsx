import React, {useState} from 'react';
import CreateBoardModal from './create_board_modal';
import BoardsIndexItem from './boards_index_item';

function BoardsIndex(props) {
    const [createBoardModalOpen, openCreateBoardModal] = useState(false)

    return (
        <div className='workspace-boards-index'>
            <header>
                <img src={window.generic_user_icon} alt="generic user icon" />
                <h2>Workspace Boards</h2>
            </header>
            <ul className="boards-index-list">
                {
                    props.boards.map((board, idx) => {
                        return <BoardsIndexItem 
                        key={board.id+idx} 
                        idx={idx} 
                        destroyBoard={() => props.destroyBoard(board.id)} 
                        board={board} />
                    })
                }


                <button className="boards-index-button" 
                    id="reveal-board-form"
                >
                    Create new board
                </button>
            </ul>



            <button 
                onClick={() => openCreateBoardModal(true) }
            >
                Create your first board
            </button>

            { createBoardModalOpen && 
                <CreateBoardModal 
                    workspaceId={props.workspaceId}
                />
            }
        </div>
    )
}

export default BoardsIndex;