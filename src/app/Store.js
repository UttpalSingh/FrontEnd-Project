import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../features/userslice'

export const store = configureStore({
    reducer:{
        user:UserReducer
    }
})