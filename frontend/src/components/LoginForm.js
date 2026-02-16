import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { saveUser } from '../redux/userSlice';

function LoginForm() {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()


        dispatch(saveUser({
            username: username,
            email: email
        }))

        navigate('/dashboard')
    }

    return (
        <div className='min-h-screen bg-gradient-to-tr from-green-500 to-cyan-500'>
            <h1>Login Form</h1>
            <div className='flex justify-center p-8 m-auto'>
                <div className=' w-1/2 h-full flex justify-center items-center bg-slate-400 rounded-xl shadow-xl'>
                    <div className=''>
                        <form onSubmit={handleSubmit} className='p-4'>
                            <div>
                                <label className='text-lg font-semibold p-2'>User Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter username'
                                    required
                                    onChange={(e) => setUserName(e.target.value)}
                                    className='w-60 h-10 p-3 border border-black rounded-lg text-black'
                                />
                            </div>
                            <div>
                                <label className='text-lg font-semibold p-2'>Email:</label>
                                <input
                                    type='email'
                                    placeholder='Enter email'
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-60 h-10 p-3 border border-black rounded-lg text-black'
                                />
                            </div>
                            <button type='submit'
                                className='w-60 h-14 rounded-lg text-center text-xl bg-blue-500 text-white'
                            >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm