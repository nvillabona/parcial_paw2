import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: { 
        tasks: [],
        isLoading: true,
        error: null 
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setTasks, setError, setLoading } = taskSlice.actions;

export default taskSlice.reducer;