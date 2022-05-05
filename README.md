# Trelloh: a Trello Clone 👯
Trelloh is a full CRUD clone of the popular productivity and task management app Trello. 

On Trelloh you can do things like:
1. create workspaces, boards, lists, cards
2. attach more detailed information to any card such as a description or comment through a neat pop up
3. browse the site as a demo user or even create your own account

#### **Check out the live link [here](https://www.trelloh.herokuapp.com)!**  
<br />
<br />

## Technologies 👩🏻‍💻
![VSCode](https://img.shields.io/badge/Editor-VSCode-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![React/Redux](https://img.shields.io/badge/Code-React/Redux-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![Javascript](https://img.shields.io/badge/Code-Javascript-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![Backend](https://img.shields.io/badge/Code-Ruby&nbsp;on&nbsp;Rails-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![HTML](https://img.shields.io/badge/Code-HTML-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![CSS](https://img.shields.io/badge/Code-CSS-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![Database](https://img.shields.io/badge/Tools-Postgresql-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![Bundler](https://img.shields.io/badge/Tools-Webpack-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)
![Sass](https://img.shields.io/badge/Tools-Sass-informational?style=for-the-badge&logo=apveyor<LOGO_NAME>&logoColor=white&color=eae8ff)  
<br />
<br />


## Feature Highlights 🌟
#### Quick Signup ✔️
<p align="center">
  <img align="center" width="500" alt="Screen Shot 2022-05-05 at 4 36 53 PM" src="https://user-images.githubusercontent.com/87621185/167021393-fec7b872-5611-423f-8d76-45f7d482c11d.png">
</p>
The quick signup feature increases the possibility of a user actually signing up for the site. The user enters their email into the quick signup form on the splash page and are brought to the signup form with their email already filled in!  
A link component was used to pass the email from the quick signup form to the full signup form. Ternary logic was used to clear the passed down email if the user refreshes once they reach the sign up page.

<br />

#### Card Customization Modals ⚙
<p align="center">
  <img align="center" width="750" alt="Screen Shot 2022-05-05 at 4 46 36 PM" src="https://user-images.githubusercontent.com/87621185/167022831-f69cb973-1204-466a-a322-842576f67210.png">
</p>
Each card has a respective modal with the following features:
* An input box that autofills with the card’s title. The title can be edited when the input box is in focus and automatically saves once the input box is out of focus again.
* An optional card description form
* A comment section 

<br />
<br />

## Code Snippets ✂️
*note: both code blocks have had lines omitted to increase readability and focus on most relevant code*  
<br />

#### Color Rotating Workspace Icons 🟠🔵🟢
When the Workspace Index is rendered, workspaces are fetched, iterated through, and each assigned a color based on their index color.
```javascript
import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom'
import DeleteWorkspaceItemModal from './delete_workspace_item_modal_container'
import EditWorkspaceItemModal from './edit_workspace_item_modal';

const WorkspaceIndexItem = (props) => {
    const [dropDownMenuOpen, openDropDownMenu] = useState(false);
    const [deleteModalOpen, openDeleteModal] = useState(false);
    const [editModalOpen, openEditModal] = useState(false);

    const colorOptions = {
        0: "#cb5223",
        1: "#373697",
        2: "#b7336e",
        3: "#027ba6",
        4: "#017951"
    }

    const selected = props.selected === props.workspace.id

    return(
        <div className='workspaces-index-container'>
            <Link className={`${selected ? "selected" : "notSelected"} workspaces-index-item`}
                onClick={() => props.setSelected(props.workspace.id)}
                to={{
                    state: {
                        workspace: props.workspace
                    },
                    pathname: `/workspaces/${props.workspace.id}/boards`
                    }
                }>
                <div className='workspaces-index-item-header'>
                    <p className='workspace-index-item-symbol' 
                        style={{ backgroundColor: colorOptions[props.idx % 5] }}
                    >
                        {props.workspace.title.slice(0, 1).toUpperCase()}
                    </p>
                    <p className='workspace-index-item-title'>
                        {props.workspace.title}
                    </p>
                </div>
            </Link
        </div>
    )
}

export default withRouter(WorkspaceIndexItem);
```  
<br/> 

#### Return to Workspace Button 🔙
The user’s workspaces are mapped to the board’s props and the board object contains the board’s assigned workspace id number. A link component on the board displays the name of the board’s workspace and dynamically constructs a link to return the user to said workspace if clicked. I am currently working on abstracting this code out to increase readability.
```javascript
import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import MainNavBar from '../navbars/mainNavBar/main_nav_bar_container';
import ListIndex from '../lists/list_index';
import BoardTitleForm from './board_title_form';
import { prefetch } from 'webpack';

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.handleBoardDelete = this.handleBoardDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkspaceBoard(parseInt(this.props.boardId))
        .then(() => this.props.fetchUserWorkspace(parseInt(this.props.board.workspace_id)))
    }

    render() {
        // console.log(this.props.workspace)
        if (!this.props.board) {
            return <p>loading!!</p>
        }

        // console.log(this.props.workspace.length !== 0 ? this.props.workspace.filter(ws => this.props.board.workspace_id === ws.id)[0].id : "no ws")

        return (
                <div className="board">
                    <MainNavBar />
                    <div className='board-header'>
                        <BoardTitleForm 
                            board={this.props.board} 
                            editBoard={this.props.editBoard}
                        />
                        <Link
                            id='board-workspace-title'
                            to={`/workspaces/${this.props.workspaces.length !== 0 ? 
                                    this.props.workspaces.filter(ws => this.props.board.workspace_id === ws.id)[0].id 
                                    : "error"}/boards`
                                }
                        >
                            {this.props.workspaces.length !== 0 ? this.props.workspaces.filter(ws => this.props.board.workspace_id === ws.id)[0].title : "no ws"}
                        </Link>
                    </div>                    
                </div>
        )
    }

}

export default Board;
```  
<br />
<br /> 


## Future Improvements and Expansions 👷🏻‍♀️
*sorted from highest to lowest priority*

* finish converting css code syntax to nested style
* finish converting all React class components to functional components
* chunk Webpack to increase loading speed
* implement a search feature that will allow users to look up any workspace, board, list, card, etc.
* make workspaces and boards shareable through user search or a link  
<br />
<br />


## Feedback 📝
Please don’t hesitate to open an issue on this repo or shoot me an email (susanzea16@gmail.com) if you find any bugs or have any suggestions for this project.  
