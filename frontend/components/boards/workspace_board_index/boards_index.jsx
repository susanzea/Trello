import React, {useState} from 'react';
import CreateBoardModal from './create_board_modal_container';
import BoardsIndexItem from './boards_index_item';

function BoardsIndex(props) {
    const [createBoardModalOpen, openCreateBoardModal] = useState(false)

    return (
        <div className='workspace-boards-index'>
            <header>
                <img src={window.generic_user_icon} alt="generic user icon" />
                <h2>Workspace Boards</h2>
            </header>
            
            {/* // TODO: refactor board list into separate component since it's repeated code  */}

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
                    onClick={() => openCreateBoardModal(true) }
                >
                    Create new board
                </button>
            </ul>


            { createBoardModalOpen && 
                <CreateBoardModal 
                    workspace={props.workspace}
                    openCreateBoardModal={openCreateBoardModal}
                />
            }
        </div>
    )
}

export default BoardsIndex;