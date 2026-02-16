const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    username: '',
    userlastname: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.username = action.payload.username;
            state.userlastname = action.payload.userlastname;
            state.email = action.payload.email
        },
        logoutUser: (state) => {
            state.username = ''
            state.userlastname = ''
            state.email = ''
        }
    }
});

export const { saveUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;