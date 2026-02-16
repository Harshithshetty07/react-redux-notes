import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { saveUser } from '../redux/userSlice';

function LoginForm() {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [userlastname, setUserLastName] = useState('')

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            username: username,
            userlastname: userlastname,
            email: email
        }

        dispatch(saveUser(userData))

        localStorage.setItem('user', JSON.stringify(userData))

        navigate('/dashboard')
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-500 to-cyan-500'>
            <div className='bg-slate-300 p-8 rounded-xl shadow-md w-full max-w-md'>

                <h1 className='text-3xl font-bold text-center mb-6'>Login Form</h1>

                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor='username' className='block text-lg font-semibold mb-2'>User Name</label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            value={username}
                            required
                            onChange={(e) => setUserName(e.target.value)}
                            className='w-full px-4 py-2 border border-black rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                        />
                    </div>
                    <div>
                        <label htmlFor='userlastname' className='block mb-2 text-lg font-semibold p-2'>User Last Name:</label>
                        <input
                            type='text'
                            placeholder='Enter user last name'
                            value={userlastname}
                            required
                            onChange={(e) => setUserLastName(e.target.value)}
                            className='w-full px-4 py-2 border border-black rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-lg font-semibold p-2'>Email:</label>
                        <input
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full px-4 py-2 border border-black rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition'
                        />
                    </div>
                    <button type='submit'
                        className='w-full py-2 px-4 rounded-lg text-center text-xl bg-blue-500 text-white focus:ring-blue-500 focus:border-transparent outline-none transition'
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm