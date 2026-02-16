import React from 'react'
import { useSelector } from 'react-redux'

function Dashboard() {

    const user = useSelector((state) => state.user)

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>

            <div>
                <h2>User Information:</h2>
                <p><strong>Username:</strong>{user.username}</p>
                <p><strong>Email:</strong>{user.email}</p>
            </div>
        </div>
    )
}

export default Dashboard