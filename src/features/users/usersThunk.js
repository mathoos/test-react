import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUsers } from './usersAPI';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkAPI) => {
        try {
            const users = await getAllUsers();
            return users;
        } 
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
