import {configureStore} from "@reduxjs/toolkit"
import { addReducer } from "./addSlice/addSlice"
// import { formReducer } from "./formSlices/formSlices";



const store =configureStore({
    reducer:{
        add:addReducer
    }
})
export default store