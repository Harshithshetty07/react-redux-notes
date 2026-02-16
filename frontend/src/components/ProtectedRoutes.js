import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { saveUser } from "../redux/userSlice";


function ProtectedRoutes({ children }) {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser && user.username === '') {
            const userData = JSON.parse(storedUser);
            dispatch(saveUser(userData))
        }
    }, [dispatch, user.username])

    const storedUser = localStorage.getItem('user')
    const isAuthenticated = user.username !== '' || storedUser !== null;

    return isAuthenticated ? children : <Navigate to='/' replace />
}

export default ProtectedRoutes