import { createSlice } from '@reduxjs/toolkit';
import { incrementAsync } from './counterThunk';

const initialState = {
    value: 0,
    status: 'idle',
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(incrementAsync.pending, state => {
            state.status = 'loading';
        })
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value += action.payload;
        })
        .addCase(incrementAsync.rejected, state => {
            state.status = 'failed';
        });
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
