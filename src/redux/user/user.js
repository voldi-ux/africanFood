import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  orders:[] 
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // login the user
      state.user = action.payload
    },
    logout: (state, action) => {
      // logout the user
    },
 
  },
});

//the login thunk
//this function should be dispatched like the normal action creator functions
// const login = async (user)=> (dispatch) => {
   
// }


export const { login,logout,addOrder, removeOrder } = userSlice.actions;
export const getUser = (state) => state.user.user
export default userSlice.reducer;
