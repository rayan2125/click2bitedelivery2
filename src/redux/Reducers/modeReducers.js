import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
    name: 'Mode',
    initialState: {
        isModeIn: false,
        modeData: 0,
    },
    reducers: {
        setOnlinedata(state, action) {
            state.isModeIn = true;
            state.modeData = action.payload;
        },
        setOfflinedata(state) {
            state.isModeIn = false;
            state.modeData = 0;
        },
    },
});



export const { setOnlinedata, setOfflinedata } = modeSlice.actions;


export default modeSlice.reducer;
