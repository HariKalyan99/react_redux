import {createAction, createSlice} from '@reduxjs/toolkit'    

const incrementByValue = createAction('reward/incrementByValue');



const initialState = {
    points: 0,
}


export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1 //value changing directly via immer lib
        },
    },
    extraReducers:(builder) => {
        builder.addCase(incrementByValue, (state, action) => {
            if(action.payload>=100){
                state.points+=10
            }
        })
    }
})


export const {increment} = bonusSlice.actions
export default bonusSlice.reducer