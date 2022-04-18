import React from 'react';

function UserMenu(props) {
    // constructor(props) {
    //     super(props);
    // }

    debugger
    return (
            <div id="logged-in-user-icon">
                { this.props.currentUser.full_name.slice(0,1).toUpperCase() }
            </div>
        )
    
}

export default UserMenu;

// { this.props.currentUser.full_name.slice(0, 1).toUpperCase() }
// { this.props.currentUser.full_name.split(" ")[1].slice(0, 1).toUpperCase() }