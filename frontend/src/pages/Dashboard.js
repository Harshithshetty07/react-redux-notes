import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/userSlice';
import useAuth from '../hooks/useAuth';

function Dashboard() {

    const user = useAuth()

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())

        localStorage.removeItem('user')

        navigate('/')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Dashboard
                    </h1>
                    <p className="text-gray-600">
                        Welcome! Here's your information
                    </p>
                </div>

                {/* User Info Card */}
                <div className="bg-white rounded-xl shadow-lg p-8">

                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
                        User Information
                    </h2>

                    {/* Username */}
                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500 block mb-1">
                            Username
                        </span>
                        <p className="text-lg text-gray-800 font-medium">
                            {user.username || 'Not provided'}
                        </p>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <span className="text-sm font-medium text-gray-500 block mb-1">
                            Email Address
                        </span>
                        <p className="text-lg text-gray-800 font-medium">
                            {user.email || 'Not provided'}
                        </p>
                    </div>

                    {/* Back Button */}
                    <button
                        onClick={handleLogout}
                        className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium transition duration-200"
                    >
                        Logout
                    </button>

                </div>

                {/* Additional Info Card */}
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                        💡 <strong>Tip:</strong> This data is stored in Redux and can be accessed from any component!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Dashboard