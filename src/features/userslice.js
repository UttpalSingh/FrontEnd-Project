import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:JSON.parse(localStorage.getItem("users")) || [],
    currentUser:null, // Before login → no user is logged in → so value is null.
    userAuthenticated:false, // before login false
    userDetails : false
}

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userLogin : (state,action) => {
            const {email,password} = action.payload // input data
            
            const userFound = state.users.find((user)=>user.email === email && user.password === password) // stored data = given data

            if(userFound){ // if all the data are correct 
                state.currentUser = userFound // user is logedIn
                state.userAuthenticated = true // after login true
            }
            else{
                state.currentUser = null
                state.userAuthenticated = false
            }
        },
        registerUser : (state,action) => {
            state.users.push(action.payload)
            localStorage.setItem("users",JSON.stringify(state.users))
            state.userDetails = true
        }
    }
})

export const {userLogin,registerUser} = UserSlice.actions
export default UserSlice.reducer