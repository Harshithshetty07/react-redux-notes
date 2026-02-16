import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { saveUser } from "../redux/userSlice";


function useAuth() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.username === '') {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                dispatch(saveUser(JSON.parse(storedUser)))
            }
        }
    }, [dispatch, user.username])

    return user;
}

export default useAuth