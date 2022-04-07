import React, {useState} from 'react';
import CreateBoardModal from './create_board_modal_container';

function NoBoardsIndex(props) {
    const [createBoardModalOpen, openCreateBoardModal] = useState(false)

    return (
        <div className='workspace-no-boards-index'>
            <img 
                src={window.workspace_placeholder} 
                alt="workspace placeholder since no board index rendering" 
            />
            <p>Boards are where work gets done in Trello. On a board, 
                you can move cards between lists to keep projects, 
                tasks, and more on track.
            </p>
            <button 
                onClick={() => openCreateBoardModal(true) }
            >
                Create your first board
            </button>

            { createBoardModalOpen && 
                <CreateBoardModal 
                    workspaceId={props.workspaceId}
                    openCreateBoardModal={openCreateBoardModal}
                />
            }
        </div>
    )
}

export default NoBoardsIndex;

