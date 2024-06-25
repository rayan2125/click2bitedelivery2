import { configureStore } from "@reduxjs/toolkit"
import authReducers from "./Reducers/authReducers"
import modeReducers from "./Reducers/modeReducers"



const Mystore = configureStore({
    reducer: authReducers,
    reducer:modeReducers
})

export default Mystore