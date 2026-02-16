import React from 'react'
import useAuth from '../hooks/useAuth'

function Feedback() {

    const user = useAuth()

    return (
        <div>
            <h1>User Name: {user.username}</h1>
        </div>
    )
}

export default Feedback