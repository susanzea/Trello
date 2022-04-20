import React, { useState, useEffect } from 'react';

function UserMenu (props) {

    const [currentUser, setCurrentUser] = useState('')
    debugger

    // TODO: not hitting useEffect
    useEffect(() => {
        props.fetchUser(props.currentUserId).then(res => {
            debugger
            setCurrentUser(res.user.full_name.slice(0,1))
            console.log(currentUser)
        })
        
    }, []);


    return (
            <div id="logged-in-user-icon">
                { currentUser ? currentUser : ''}
            </div>
        )
    
}

export default UserMenu;
