import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.jsx"


const store = configureStore({
    reducer : {
        auth : authSlice
    }
})

export default store;