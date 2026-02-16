import useReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        user: useReducer
    }
})

export default store