import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    harryPotterUser: {userEmail: ""},
}

export const userSlice = createSlice({
    name: "harryPotterUser",
    initialState,
    reducers: {
        setEmailInStore: (state, action) => {
            state.harryPotterUser = {...action.payload};
        }
    }
});

export const {setEmailInStore} = userSlice.actions;

export default userSlice.reducer;