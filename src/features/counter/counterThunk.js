import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFakeIncrement } from '../../utils/server';

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount) => {
        const response = await fetchFakeIncrement(amount);
        return response; // correspond à action.payload
    }
);
