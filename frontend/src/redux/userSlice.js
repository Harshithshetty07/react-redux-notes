const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    username: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email
        }
    }
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;