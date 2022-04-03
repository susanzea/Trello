import React from 'react';

class UserMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // TODO: refactor full name in signup form to have two fields
        return (
            <div id="logged-in-user-icon">
                DU
            </div>
        )
    }
}

export default UserMenu;

// { this.props.currentUser.full_name.slice(0, 1).toUpperCase() }
// { this.props.currentUser.full_name.split(" ")[1].slice(0, 1).toUpperCase() }