import { configureStore } from "@reduxjs/toolkit";
import slice from "./slice";

const store = configureStore({
    reducer: {
        "counter-slice": slice,
    },
});

export default store;
