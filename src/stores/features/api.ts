import { createAsyncThunk,createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import axios from "axios";

interface initalProps{
    status:'Fail' | 'Loading' | 'Success' | ''
    data:FoodProps[]
}

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


export const GetItem=createAsyncThunk<FoodProps[]>('food/getitem',async ()=>{
    try{
        const response = await axios.get('http://localhost:3000/api/food/');

      return response.data
    }catch(err){
        console.log(err)
        return err
    }
})

const initialState:initalProps={
    status:'',
    data:[]
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
        builder.addCase(GetItem.rejected,(state)=>{
            state.status='Fail'
        })
        builder.addCase(GetItem.pending,(state)=>{
            state.status='Loading'
        })
        builder.addCase(GetItem.fulfilled,(state,action:PayloadAction<FoodProps[]>)=>{
            state.status='Success'
            state.data=action.payload
        })
    }
})

export default apiSlice.reducer