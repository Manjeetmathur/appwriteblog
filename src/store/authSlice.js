import { createSlice } from "@reduxjs/toolkit";

const initialState = {
       status : false,
       userData : null
}

const authSlice = createSlice({
       name : "auth",
       initialState,
       reducers:{
              login : (state , action) => {
                     
                     // console.log(state);
                     
                     // console.log("state.status :\n",state.status);
                     state.status = true,
                     // console.log("state.status :\n",state.status);
                     // console.log("state.userData\n",state.userData);
                     
                     // console.log("action.payload.userData\n",action.payload.userData);
                     state.userData = action.payload.userData;
                     // console.log("state.userData\n",state.userData);
              },
              logout : (state) => {
                     // console.log(state);
                     
                     state.status = false,
                     state.userData = null
              }
       }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer