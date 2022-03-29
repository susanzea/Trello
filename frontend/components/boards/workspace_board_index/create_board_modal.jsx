import React, {useState} from 'react';
import { render } from 'react-dom';

class CreateBoardModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            workspaceId: props.workspaceId
        }
    }



    render() {
        return (
            <div className=''>


            </div>
        )
    }
}

export default CreateBoardModal;