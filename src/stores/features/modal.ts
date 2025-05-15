import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState={
    modal:''
}

const modal=createSlice({
    name:'modal',
    initialState,
    reducers:{
        setModal:(state,action:PayloadAction<string>)=>{
            state.modal=action.payload
        }
        
    }
})


export const {setModal} = modal.actions
export default modal.reducer