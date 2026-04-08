import { createContext,useContext } from "react";

export const UserInfo = createContext({
    users:[{
        name:"abcd",
        mobile:12345,
        age:24,
        email:"123@gmail.com",
        password:"1234abc"
    }]
})



export const UserProvider = UserInfo.Provider

export const UseInfo = () =>{
    return useContext(UserInfo)
}