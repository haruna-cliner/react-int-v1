import {configureStore} from '@reduxjs/toolkit';
import appSlice from "./slices/appSlice";
import postSlice from "./slices/postSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        posts: postSlice
    },
});
