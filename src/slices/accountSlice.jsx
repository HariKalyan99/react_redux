import {createSlice} from '@reduxjs/toolkit'    


const initialState = {
    amount: 0,
}


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
    }
})


export const {increment, incrementByAmount, decrement} = accountSlice.actions
export default accountSlice.reducer