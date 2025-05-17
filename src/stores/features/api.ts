import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";



export const CreateApi=createAsyncThunk<string, FormData>('food/createFood',async (formData)=>{
    try{
        const response = await axios.post('http://localhost:3000/api/food/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // formData gönderiyorsan bu önemli
        },
      });

      return response.data
    }catch(err){
        console.log(err)
        return err
    }
})

const initialState={
    status:''
}

const apiSlice=createSlice({
    name:'apiSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(CreateApi.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(CreateApi.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(CreateApi.fulfilled,(state)=>{
            state.status='Success'
        })
    }
})

export default apiSlice.reducer