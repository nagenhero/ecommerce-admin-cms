import { createSlice } from "@reduxjs/toolkit";
const initialState={
showSideMenu:false,
}
const SystemSlice = createSlice({
    name:"system",
    initialState,
    reducers:{
        toggleShowSideMenu:(state)=>{
            //console.log("fsafasfasd");
            
            state.showSideMenu=!state.showSideMenu;
        },

    },

});
const{reducer,actions} =SystemSlice;
export const {toggleShowSideMenu}=actions;
export default reducer;