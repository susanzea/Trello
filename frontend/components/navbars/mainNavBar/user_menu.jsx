import React, { useState, useEffect } from 'react';

function UserMenu (props) {
    // constructor(props) {
    //     super(props);
    // }
    const [currentUser, setFullName] = useState([])
    debugger

    // TODO: not hitting useEffect
    useEffect(() => {
        debugger
        props.fetchUser(props.currentUserId).then(res => {
            debugger
            setFullName(Object.values(res.user))
        })
        
    }, []);

    // console.log(props.currentUser)
    // debugger
    return (
            <div id="logged-in-user-icon">
                { currentUser.full_name.slice(0,1).toUpperCase() }
            </div>
        )
    
}

export default UserMenu;
