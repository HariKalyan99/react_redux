import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'    
import axios from 'axios';


const initialState = {
    amount: 0,
    product: "",
    pending: false,
    error: false
}

export const getProdyctById = createAsyncThunk('account/getUser', async (productId, thunkAPI) => {
    const {data} = await axios.get(`https://dummyjson.com/products${productId}`);
    return data.title;
})


export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 1 //value changing directly via immer lib
        },
        decrement: (state) => {
            state.amount -= 1
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProdyctById.fulfilled, (state, action) => {
            state.product = action.payload;
            state.pending = false;
        }).addCase(getProdyctById.pending, (state, action) => {
            state.pending = true;
        }).addCase(getProdyctById.rejected, (state, action) => {
            state.error = true;
            state.pending = false;
        })
    }
})


export const {increment, incrementByAmount, decrement} = accountSlice.actions
export default accountSlice.reducer