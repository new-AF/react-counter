import { createSlice } from "@reduxjs/toolkit";

const state0 = {
    count: BigInt(0),
};

const slice = createSlice({
    name: "counter-slice",
    initialState: state0,
    reducers: {
        countUp: (state, action) => {
            state.count += BigInt(1);
        },
        countDown: (state, action) => {
            state.count -= BigInt(1);
        },
        reset0: (state, action) => {
            state.count = BigInt(0);
        },
        resetMax: (state, action) => {
            state.count = BigInt(Number.MAX_SAFE_INTEGER);
        },
    },
});

export const { countUp, countDown, reset0, resetMax } = slice.actions;
export default slice.reducer;
